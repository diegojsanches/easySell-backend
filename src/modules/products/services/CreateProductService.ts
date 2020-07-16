import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  code: string;
  description: string;
  stock: number;
  price: number;
  cost: number;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    code,
    description,
    stock,
    price,
    cost,
  }: IRequest): Promise<Product> {
    const findProductWhitSameCode = await this.productsRepository.findByCode(
      code,
    );

    if (findProductWhitSameCode) {
      throw new AppError('This product is already added.');
    }

    const product = await this.productsRepository.create({
      code,
      description,
      stock,
      price,
      cost,
    });

    return product;
  }
}

export default CreateProductService;
