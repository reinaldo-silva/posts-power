import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity()
export class UserTest {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
