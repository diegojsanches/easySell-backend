import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProductsController from '../controllers/ProductsController';

const productsRoute = Router();
const productsController = new ProductsController();

productsRoute.use(ensureAuthenticated);

productsRoute.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      q: Joi.string(),
    },
  }),
  productsController.index,
);

productsRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      code: Joi.string().required(),
      description: Joi.string().required(),
      stock: Joi.number().required(),
      price: Joi.number().required(),
      cost: Joi.number().required(),
    },
  }),
  productsController.create,
);

productsRoute.get(
  '/:product_id/',
  celebrate({
    [Segments.PARAMS]: {
      product_id: Joi.string().required(),
    },
  }),
  productsController.show,
);

productsRoute.put(
  '/:product_id/',
  celebrate({
    [Segments.PARAMS]: {
      product_id: Joi.string().required(),
    },
    [Segments.BODY]: {
      code: Joi.string().required(),
      description: Joi.string().required(),
      stock: Joi.number().required(),
      price: Joi.number().required(),
      cost: Joi.number().required(),
    },
  }),
  productsController.update,
);

export default productsRoute;
