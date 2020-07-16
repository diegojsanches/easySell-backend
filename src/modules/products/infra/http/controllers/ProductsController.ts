import { Request, Response } from 'express';
import CreateProductService from '@modules/products/services/CreateProductService';
import { container } from 'tsyringe';
import UpdateProductService from '@modules/products/services/UpdateProductService';
import ListProductsQueryService from '@modules/products/services/ListProductsQueryService';
import ListProductsService from '@modules/products/services/ListProductsService';
import ShowProductService from '@modules/products/services/ShowProductService';

class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { q } = req.query;

    let products;
    if (q) {
      const listProducts = container.resolve(ListProductsQueryService);
      products = await listProducts.execute(q as string);
    } else {
      const listProducts = container.resolve(ListProductsService);
      products = await listProducts.execute();
    }

    return res.json(products);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { product_id } = req.params;

    const showProduct = container.resolve(ShowProductService);

    const product = await showProduct.execute({ product_id });

    return res.json(product);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { code, description, stock, price, cost } = req.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      code,
      description,
      stock,
      price,
      cost,
    });

    return res.json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { product_id } = req.params;
    const { code, description, stock, price, cost } = req.body;

    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({
      product_id,
      code,
      description,
      stock,
      price,
      cost,
    });

    return res.json(product);
  }
}

export default ProductsController;
