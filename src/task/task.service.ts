import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { ITask, ITaskCreate } from 'src/interface/ITask';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
    private readonly userService: UserService,
  ) {}
  hello() {
    return 'Hello from task service';
  }

  async createTask(userId: number, createTaskDto: ITaskCreate) {
    const user = await this.userService.getUser(userId);
    let task: ITask | undefined;
    try {
      task = this.taskRepository.create({ ...createTaskDto, user });
      this.taskRepository.save(task);
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to create task',
      });
    }
    return 'Task created with success';
  }

  async getTaskByUser(userId: number) {
    let tasks: ITask[] | undefined;
    try {
      tasks = await this.taskRepository.find({
        where: { user: { id: userId } },
      });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to getting task',
      });
    }
    if (!tasks) {
      throw new NotFoundException('Error getting information', {
        description: 'Tasks not found',
      });
    }

    return tasks;
  }
}
