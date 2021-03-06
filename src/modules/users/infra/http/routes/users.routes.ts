import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { celebrate, Segments, Joi } from 'celebrate';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ensureManagerAuthenticated from '../middlewares/ensureManagerAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig.multer);

usersRouter.get('/', ensureManagerAuthenticated, usersController.index);

usersRouter.put(
  '/:user_id',
  ensureManagerAuthenticated,
  celebrate({
    [Segments.BODY]: {
      manager: Joi.boolean().required(),
    },
  }),
  usersController.update,
);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
