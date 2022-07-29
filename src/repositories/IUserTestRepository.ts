import { UserTest } from '../entities/usuariosTest.entity';

export interface IUserTestRepository {
  findAll(): Promise<UserTest[]>;
  findById(id: string): Promise<UserTest | undefined>;
  save(user: UserTest): Promise<UserTest>;
  delete(user: UserTest): Promise<void>;
}
