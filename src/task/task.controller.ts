import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskCreateDto } from 'src/dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  hello() {
    return this.taskService.hello();
  }

  @Post('/:id')
  // Pipes -> Tuberia
  createTask(
    @Param('id', ParseIntPipe) userId: number,
    @Body() taskCreateDto: TaskCreateDto,
  ) {
    console.log(userId, typeof userId);
    // return true;
    return this.taskService.createTask(userId, taskCreateDto);
  }

  @Get('/:id')
  getTasks(@Param('id', ParseIntPipe) userId: number) {
    return this.taskService.getTaskByUser(userId);
  }
}
