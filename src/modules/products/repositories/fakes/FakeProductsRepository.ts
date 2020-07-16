import { uuid } from 'uuidv4';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';

import Product from '../../infra/typeorm/entities/Product';

class FakeProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  public async create({
    code,
    description,
    stock,
    price,
    cost,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product();
    Object.assign(product, {
      id: uuid(),
      code,
      description,
      cost,
      price,
      stock,
    });

    this.products.push(product);
    return product;
  }

  public async findAll(): Promise<Product[]> {
    return this.products;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const findProduct = this.products.find((product) => product.id === id);

    return findProduct;
  }

  public async findByCode(code: string): Promise<Product | undefined> {
    const findProduct = this.products.find((product) => product.code === code);

    return findProduct;
  }

  public async filterByQuery(q: string): Promise<Product[] | undefined> {
    const findProduct = this.products.filter(
      (product) => product.code.includes(q) || product.description.includes(q),
    );

    return findProduct;
  }

  public async save(product: Product): Promise<Product> {
    const findIndex = this.products.findIndex(
      (findProduct) => findProduct.id === product.id,
    );

    this.products[findIndex] = product;

    return product;
  }
}

export default FakeProductsRepository;
