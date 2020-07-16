import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  product_id: string;
  code: string;
  description: string;
  stock: number;
  price: number;
  cost: number;
}

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    product_id,
    code,
    description,
    stock,
    price,
    cost,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(product_id);

    if (!product) {
      throw new AppError('Product dont exist', 401);
    }

    product.code = code;
    product.description = description;
    product.stock = stock;
    product.price = price;
    product.cost = cost;

    return this.productsRepository.save(product);
  }
}

export default UpdateProductService;
