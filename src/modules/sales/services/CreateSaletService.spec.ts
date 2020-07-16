import AppError from '@shared/errors/AppError';

import { addDays, setHours } from 'date-fns';
import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import CreateProductService from './CreateProductService';

let fakeProductsRepository: FakeProductsRepository;
let createProduct: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(async () => {
    fakeProductsRepository = new FakeProductsRepository();
    createProduct = new CreateProductService(fakeProductsRepository);
  });

  it('should be able to create a new product', async () => {
    const product = await createProduct.execute({
      code: '1234',
      description: 'Produto1',
      stock: 3,
      price: 50,
      cost: 25,
    });

    expect(product).toHaveProperty('id');
    expect(product.code).toBe('1234');
    expect(product.description).toBe('Produto1');
  });

  it('should not be able to create two product at the same code', async () => {
    const productDate = addDays(setHours(Date.now(), 10), 6);

    await createProduct.execute({
      code: '1234',
      description: 'Produto1',
      stock: 3,
      price: 50,
      cost: 25,
    });

    await expect(
      createProduct.execute({
        code: '1234',
        description: 'Produto1',
        stock: 3,
        price: 50,
        cost: 25,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
