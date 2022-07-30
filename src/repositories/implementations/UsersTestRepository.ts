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
    return this.usersRepository.find()
  }
  findById(id: string): Promise<UserTest> {
    return this.usersRepository.findOneBy({ id })
  }
  save(user: UserTest): Promise<UserTest> {
    return this.usersRepository.save(user)
  }
  delete(user: UserTest): Promise<void> {
    this.usersRepository.delete(user)
    return
  }
}
