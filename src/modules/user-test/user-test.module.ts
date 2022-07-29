import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTest } from '../../entities/usuariosTest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTest])],
  exports: [TypeOrmModule],
})
export class UserTestModule {}
