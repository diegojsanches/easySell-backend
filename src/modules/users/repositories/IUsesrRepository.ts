import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO';

export default interface IUsersRepository {
  findAppProviders(data: IFindAllProvidersDTO): Promise<User[]>;

  findAll(id: string): Promise<User[]>;

  findById(id: string): Promise<User | undefined>;

  findByEmail(email: string): Promise<User | undefined>;

  create(data: ICreateUserDTO): Promise<User>;

  save(user: User): Promise<User>;
}
