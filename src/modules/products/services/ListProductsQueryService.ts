import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

@injectable()
class ListProductsQueryService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(q: string): Promise<Product[] | undefined> {
    const products = await this.productsRepository.filterByQuery(q);
    return products;
  }
}

export default ListProductsQueryService;
