import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsesrRepository';

interface IRequest {
  user_id: string;
  manager: boolean;
}

@injectable()
class UpdateUserManagerService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, manager }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401);
    }

    user.manager = manager;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserManagerService;
