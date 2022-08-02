import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserTest } from '../../entities/usuariosTest.entity';
import { CreateUserTestDto } from './user-test.dto';
import { UserTestService } from './user-test.service';

@Controller('user-test')
@UseInterceptors(ClassSerializerInterceptor)
export class UserTestController {
  constructor(private usersTestService: UserTestService) {}

  @Get()
  findAll(): Promise<UserTest[]> {
    return this.usersTestService.findAll();
  }

  @Get(':id')
  findById(@Param() { id }: { id: string }): Promise<UserTest> {
    return this.usersTestService.findOne(id);
  }

  @Post()
  public createUser(@Body() body: CreateUserTestDto): Promise<UserTest> {
    return this.usersTestService.createUser(body);
  }

  @Delete(':id')
  public DeleteUser(@Param() { id }: { id: string }): Promise<void> {
    return this.usersTestService.remove(id);
  }
}
