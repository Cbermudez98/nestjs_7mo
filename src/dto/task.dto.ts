import { IsNotEmpty, IsString } from 'class-validator';
import { ITaskCreate } from 'src/interface/ITask';

export class TaskCreateDto implements ITaskCreate {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
