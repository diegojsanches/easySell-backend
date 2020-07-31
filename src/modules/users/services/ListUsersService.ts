import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsesrRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAll(user_id);
    return users;
  }
}

export default ListUsersService;
