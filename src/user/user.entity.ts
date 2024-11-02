import { Task } from './../task/task.entity';
import { ITask } from 'src/interface/ITask';
import { IUser } from 'src/interface/IUser';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Task, (task) => task.user)
  tasks: ITask[];
}
