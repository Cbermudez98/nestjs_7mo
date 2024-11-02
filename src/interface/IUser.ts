import { ITask } from './ITask';

export interface IUser {
  id: number;
  name: string;
  lastName: string;
  age: number;
  tasks: ITask[];
}

export interface IUserCreate extends Omit<IUser, 'id' | 'tasks'> {}

export interface IUserUpdate extends Partial<IUserCreate> {}
