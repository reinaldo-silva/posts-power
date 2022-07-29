import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTest } from '../../entities/usuariosTest.entity';
import { IUserTestRepository } from '../IUserTestRepository';

@Injectable()
export class UsersTestRepository implements IUserTestRepository {
  constructor(
    @InjectRepository(UserTest)
    private readonly usersRepository: Repository<UserTest>,
  ) {}
  findAll(): Promise<UserTest[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<UserTest> {
    throw new Error('Method not implemented.');
  }
  save(user: UserTest): Promise<UserTest> {
    throw new Error('Method not implemented.');
  }
  delete(user: UserTest): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
