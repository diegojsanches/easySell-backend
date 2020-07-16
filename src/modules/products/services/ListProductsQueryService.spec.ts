import ListProductsQueryService from './ListProductsQueryService';
import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';

let fakeProductsRepository: FakeProductsRepository;
let listProducts: ListProductsQueryService;

describe('ListProductsQuery', () => {
  beforeEach(async () => {
    fakeProductsRepository = new FakeProductsRepository();
    listProducts = new ListProductsQueryService(fakeProductsRepository);
  });

  it('should be able to list products', async () => {
    const firstProduct = await fakeProductsRepository.create({
      code: '1234',
      description: 'Produto1',
      stock: 3,
      price: 50,
      cost: 25,
    });

    const secondProduct = await fakeProductsRepository.create({
      code: '4321',
      description: 'Produto2',
      stock: 4,
      price: 30,
      cost: 20,
    });

    const products = await listProducts.execute();

    expect(products).toEqual([firstProduct, secondProduct]);
  });
});
