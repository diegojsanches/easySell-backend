import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListUsersService from '@modules/users/services/ListUsersService';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserManagerService from '@modules/users/services/UpdateUserManagerService';

class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);
    const users = await listUsers.execute({ user_id: req.user.id });
    return res.json(classToClass(users));
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return res.json(classToClass(user));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;
    const { manager } = req.body;

    const updateUserManager = container.resolve(UpdateUserManagerService);

    const user = await updateUserManager.execute({ user_id, manager });

    return res.json(classToClass(user));
  }
}

export default UsersController;
