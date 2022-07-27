import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ default: 'Name' })
  name: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  email: string;

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
