import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserTest } from '../../entities/usuariosTest.entity';
import { IUserTestRepository } from '../../repositories/IUserTestRepository';
import { CreateUserTestDto } from './user-test.dto';

@Injectable()
export class UserTestService {
  constructor(
    @Inject('IUserTestRepository')
    private usersTestRepository: IUserTestRepository,
  ) {}

  async createUser(data: CreateUserTestDto): Promise<UserTest> {
    const newUser = new UserTest();

    return await this.usersTestRepository.save(Object.assign(newUser, data));
  }

  findAll(): Promise<UserTest[]> {
    return this.usersTestRepository.findAll();
  }

  findOne(id: string): Promise<UserTest> {
    return this.usersTestRepository.findById(id);
  }

  async remove(id: string): Promise<void> {
    const userFound = await this.usersTestRepository.findById(id);

    if (!userFound) {
      throw new NotFoundException('User not found!');
    }

    await this.usersTestRepository.delete(userFound);
  }
}
