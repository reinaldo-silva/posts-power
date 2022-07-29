import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from '../../config/typeorm.config';
import { UserTest } from '../../entities/usuariosTest.entity';
import { UsersTestRepository } from '../../repositories/implementations/UsersTestRepository';
import { UserTestController } from './user-test.controller';
import { UserTestService } from './user-test.service';

describe('UsersTestController', () => {
  let controller: UserTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(typeormConfig),
        TypeOrmModule.forFeature([UserTest]),
      ],
      exports: [TypeOrmModule],
      controllers: [UserTestController],
      providers: [
        UserTestService,
        { provide: 'IUserTestRepository', useClass: UsersTestRepository },
      ],
    }).compile();

    controller = module.get<UserTestController>(UserTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be create a new User Test', async () => {
    const res = await controller.createUser({
      email: 'reinaldo@email.com',
      name: 'Reinaldo Silva ',
      age: 24,
    });

    expect(res).toHaveProperty('id');
  });

  it('should be list all Users Test', async () => {
    const res = await controller.findAll();

    expect(res).toEqual(expect.arrayContaining([]));
  });

  it('should be list one User', async () => {
    const user = await controller.createUser({
      email: 'reinaldo@email.com',
      name: 'Reinaldo Silva ',
      age: 24,
    });

    const res = await controller.findById({ id: user.id });

    expect(res).toHaveProperty('name');
    expect(res).toHaveProperty('email');
    expect(res).toHaveProperty('age');
  });
});
