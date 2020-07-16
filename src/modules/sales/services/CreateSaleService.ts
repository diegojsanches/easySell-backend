import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import Sale from '../infra/typeorm/entities/Sale';
import ISalesRepository from '../repositories/ISalesRepository';

interface IRequest {
  buyer: string;
  payment: number;
  items: Array<{
    product_id: string;
    amount: number;
  }>;
}

@injectable()
class CreateSaleService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ buyer, payment, items }: IRequest): Promise<Sale> {
    const parseItems = await Promise.all(
      items.map(async (item) => {
        const product = await this.productsRepository.findById(item.product_id);

        if (!product) {
          throw new AppError('Product not found');
        }

        product.stock -= item.amount;
        this.productsRepository.save(product);

        return {
          ...item,
          price: product.price,
          cost: product.cost * item.amount,
          total: product.price * item.amount,
        };
      }),
    );

    const totalSale = parseItems.reduce(
      (sumItems, { total, cost }) => ({
        total: sumItems.total + total,
        cost: sumItems.cost + cost,
      }),
      { total: 0, cost: 0 },
    );

    const sale = await this.salesRepository.create({
      buyer,
      payment,
      items: parseItems,
      ...totalSale,
    });

    return sale;
  }
}

export default CreateSaleService;
