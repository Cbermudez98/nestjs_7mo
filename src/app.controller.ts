import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getUser() {
  //   return this.appService.getUsers();
  // }

  // @Post()
  // postUser(@Body() data: UserDto) {
  //   console.log(data);
  //   this.appService.createUser(data);
  //   return 'Saved with success';
  // }

  // @Patch('/:id')
  // updateUser(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
  //   return this.appService.updateUser(id, updateUser);
  // }

  // @Delete('/:id')
  // deleteUser(@Param('id') id: string) {
  //   return this.appService.deleteUser(id);
  // }
}
