import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;

  findAll(): Promise<Product[]>;

  findById(id: string): Promise<Product | undefined>;

  findByCode(code: string): Promise<Product | undefined>;

  filterByQuery(q: string): Promise<Product[] | undefined>;

  save(product: Product): Promise<Product>;
}
