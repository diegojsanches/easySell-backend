import Sale from '@modules/sales/infra/typeorm/entities/Sale';
import ICreateSaleDTO from '@modules/sales/dtos/ICreateSaleDTO';
import { uuid } from 'uuidv4';
import ISalesRepository from '../ISalesRepository';

class FakeSalesRepsitory implements ISalesRepository {
  private sales: Sale[] = [];

  public async create({
    buyer,
    payment,
    items,
  }: ICreateSaleDTO): Promise<Sale> {
    const sale = new Sale();
    Object.assign(sale, {
      id: uuid(),
      buyer,
      payment,
      items,
    });

    this.sales.push(sale);
    return sale;
  }

  public async findAll(): Promise<Sale[]> {
    return this.sales;
  }

  public async findByDateRange(): Promise<Sale[]> {
    return this.sales;
  }

  public async findById(id: string): Promise<Sale | undefined> {
    const findSale = this.sales.find((sale) => sale.id === id);

    return findSale;
  }

  public async save(sale: Sale): Promise<Sale> {
    const findIndex = this.sales.findIndex(
      (findSale) => findSale.id === sale.id,
    );

    this.sales[findIndex] = sale;

    return sale;
  }
}

export default FakeSalesRepsitory;
