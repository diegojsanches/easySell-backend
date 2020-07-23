import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSaleService from '@modules/sales/services/CreateSaleService';
import ListSalesService from '@modules/sales/services/ListSalesService';
import ShowSaleService from '@modules/sales/services/ShowSaleService';

class SalesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { fromDate, toDate } = req.query;
    // const parsedFromDate = parse(fromDate as string, 'yyyy-MM-dd', new Date());
    // const parsedToDate = parse(toDate as string, 'yyyy-MM-dd', new Date());

    const listSales = container.resolve(ListSalesService);

    const sales = await listSales.execute({
      fromDate: new Date(fromDate as string),
      toDate: new Date(toDate as string),
    });

    return res.json(sales);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { sale_id } = req.params;

    const showSale = container.resolve(ShowSaleService);

    const sale = await showSale.execute({ sale_id });

    return res.json(sale);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { buyer, payment, items } = req.body;

    const createSale = container.resolve(CreateSaleService);

    const sale = await createSale.execute({
      buyer,
      payment,
      items,
    });

    return res.json(sale);
  }
}

export default SalesController;
