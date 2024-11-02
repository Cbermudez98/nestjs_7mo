import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IUserCreate } from 'src/interface/IUser';

export class UserDto implements IUserCreate {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
