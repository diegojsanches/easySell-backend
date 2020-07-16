import ICreateSaleDTO from '../dtos/ICreateSaleDTO';
import Sale from '../infra/typeorm/entities/Sale';

export default interface ISalesRepository {
  create(data: ICreateSaleDTO): Promise<Sale>;

  findAll(): Promise<Sale[]>;

  findByDateRange(fromDate?: Date, toDate?: Date): Promise<Sale[]>;

  findById(id: string): Promise<Sale | undefined>;

  save(sale: Sale): Promise<Sale>;
}
