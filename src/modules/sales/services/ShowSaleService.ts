import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import ISalesRepository from '../repositories/ISalesRepository';
import Sale from '../infra/typeorm/entities/Sale';

interface IRequest {
  sale_id: string;
}

@injectable()
class ShowSaleService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,
  ) {}

  public async execute({ sale_id }: IRequest): Promise<Sale> {
    const sale = await this.salesRepository.findById(sale_id);

    if (!sale) {
      throw new AppError('Sale not found.', 401);
    }

    return sale;
  }
}

export default ShowSaleService;
