import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

// TODO: Explain next class -> Circular dependencies

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  controllers: [TaskController],
  providers: [TaskService, UserService],
})
export class TaskModule {}
