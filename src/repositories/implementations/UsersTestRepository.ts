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

  async findAll(): Promise<UserTest[]> {
    return this.usersRepository.find();
  }

  findById(id: string): Promise<UserTest> {
    return this.usersRepository.findOneBy({ id });
  }

  async save(user: UserTest): Promise<UserTest> {
    const newUserTest = new UserTest();

    const userTest = await this.usersRepository.save(
      Object.assign(newUserTest, user),
    );
    return userTest;
  }

  async delete(user: UserTest): Promise<void> {
    this.usersRepository.remove(user);
  }
}
