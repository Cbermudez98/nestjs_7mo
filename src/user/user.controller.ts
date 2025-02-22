import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';
import { UpdateUserDto } from 'src/dto/user-update.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Get()
  getUser() {
    return this.userService.getUsers();
  }

  @Post()
  postUser(@Body() data: UserDto) {
    console.log(data);
    this.userService.createUser(data);
    return 'Saved with success';
  }

  @Patch('/:id')
  updateUser(@Param('id') id: number, @Body() updateUser: UpdateUserDto) {
    return this.userService.updateUser(id, updateUser);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
