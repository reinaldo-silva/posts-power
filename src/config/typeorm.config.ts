import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Like } from '../entities/like.entity';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';
import { UserTest } from '../entities/usuariosTest.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'imob',
  password: 'imob',
  database: 'imob',
  entities: [User, Post, Like, UserTest],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
} as TypeOrmModuleOptions;
