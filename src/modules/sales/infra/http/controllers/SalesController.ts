import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSaleService from '@modules/sales/services/CreateSaleService';
import ListSalesService from '@modules/sales/services/ListSalesService';
import ShowSaleService from '@modules/sales/services/ShowSaleService';
import { endOfDay, startOfDay } from 'date-fns';

class SalesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { fromDate, toDate } = req.query;
    const parsedFromDate = startOfDay(new Date(fromDate as string));
    const parsedToDate = endOfDay(new Date(toDate as string));
    const listSales = container.resolve(ListSalesService);

    const sales = await listSales.execute({
      fromDate: parsedFromDate,
      toDate: parsedToDate,
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
