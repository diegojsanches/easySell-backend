import { Repository, getRepository, Between } from 'typeorm';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';

import ICreateSaleDTO from '@modules/sales/dtos/ICreateSaleDTO';

import Sale from '@modules/sales/infra/typeorm/entities/Sale';

class SalesRepository implements ISalesRepository {
  private ormRepository: Repository<Sale>;

  constructor() {
    this.ormRepository = getRepository(Sale);
  }

  public async create({
    buyer,
    payment,
    cost,
    total,
    items,
  }: ICreateSaleDTO): Promise<Sale> {
    const sale = this.ormRepository.create({
      buyer,
      payment,
      cost,
      total,
      items,
    });

    await this.ormRepository.save(sale);

    return sale;
  }

  public async findAll(): Promise<Sale[]> {
    return this.ormRepository.find();
  }

  public async findByDateRange(fromDate: Date, toDate: Date): Promise<Sale[]> {
    return this.ormRepository.find({
      where: {
        created_at: Between(fromDate, toDate),
      },
    });
  }

  public async findById(id: string): Promise<Sale | undefined> {
    const findSale = await this.ormRepository.findOne(id, {
      relations: ['items'],
    });

    return findSale;
  }

  public async save(sale: Sale): Promise<Sale> {
    return this.ormRepository.save(sale);
  }
}

export default SalesRepository;
