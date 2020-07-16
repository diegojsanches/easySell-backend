import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import SalesController from '../controllers/SalesController';

const salesRoute = Router();
const salesController = new SalesController();

salesRoute.use(ensureAuthenticated);

salesRoute.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      fromDate: Joi.date(),
      toDate: Joi.date(),
    },
  }),
  salesController.index,
);

salesRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      buyer: Joi.string().allow(''),
      payment: Joi.number().required(),
      items: Joi.array().items(
        Joi.object().keys({
          product_id: Joi.string().required(),
          amount: Joi.number().required(),
        }),
      ),
    },
  }),
  salesController.create,
);

salesRoute.get(
  '/:sale_id/',
  celebrate({
    [Segments.PARAMS]: {
      sale_id: Joi.string().required(),
    },
  }),
  salesController.show,
);

export default salesRoute;
