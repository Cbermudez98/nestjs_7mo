import { IUser } from './IUser';

export interface ITask {
  id: number;
  title: string;
  description: string;
  user: IUser;
}

export interface ITaskCreate extends Omit<ITask, 'id' | 'user'> {}
