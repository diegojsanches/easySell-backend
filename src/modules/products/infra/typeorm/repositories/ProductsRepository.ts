import { getRepository, Repository, Like } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';

import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';

import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    code,
    description,
    stock,
    price,
    cost,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      code,
      description,
      stock,
      price,
      cost,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findAll(): Promise<Product[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Product | undefined> {
    const findProduct = await this.ormRepository.findOne(id);

    return findProduct;
  }

  public async findByCode(code: string): Promise<Product | undefined> {
    const findProduct = await this.ormRepository.findOne({
      where: { code },
    });

    return findProduct;
  }

  public async filterByQuery(q: string): Promise<Product[] | undefined> {
    const filterProducts = await this.ormRepository
      .createQueryBuilder('products')
      .where('code = :q OR LOWER(description) LIKE :qLower', {
        q,
        qLower: `${q.toLowerCase()}%`,
      })
      .getMany();
    return filterProducts;
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }
}

export default ProductsRepository;
