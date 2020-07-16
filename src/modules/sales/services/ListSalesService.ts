import { injectable, inject } from 'tsyringe';

import ISalesRepository from '../repositories/ISalesRepository';
import Sale from '../infra/typeorm/entities/Sale';

interface IListSales {
  income: number;
  outcome: number;
  profit: number;
  sales: Array<Sale>;
}

interface IExecuteData {
  fromDate?: Date;
  toDate?: Date;
}

@injectable()
class ListSalesService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,
  ) {}

  public async execute({
    fromDate,
    toDate,
  }: IExecuteData): Promise<IListSales> {
    let sales = [];
    if (fromDate && toDate) {
      sales = await this.salesRepository.findByDateRange(fromDate, toDate);
    } else {
      sales = await this.salesRepository.findAll();
    }

    const listSales = sales.reduce(
      (total, sale) =>
        ({
          income: total.income + Number(sale.total),
          outcome: total.outcome + Number(sale.cost),
        } as IListSales),
      {
        income: 0,
        outcome: 0,
      } as IListSales,
    );

    listSales.profit = listSales.income - listSales.outcome;
    listSales.sales = sales;

    return listSales;
  }
}

export default ListSalesService;
