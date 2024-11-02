import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, IUserCreate, IUserUpdate } from './interface/IUser';
import { v4 } from 'uuid';
@Injectable()
export class AppService {
  // CRUD Users
  // private users: IUser[] = [];
  // getUsers() {
  //   return this.users;
  // }

  // createUser(user: IUserCreate) {
  //   const newUser = { ...user, id: v4() };
  //   this.users.push(newUser);
  // }

  // updateUser(id: string, userUpdate: IUserUpdate) {
  //   let user: IUser | undefined = this.users.find(
  //     (value: IUser) => value.id === id,
  //   );
  //   if (!user) {
  //     throw new NotFoundException('User not found', {
  //       description: 'User does not exists in my app',
  //     });
  //   }

  //   user.age = userUpdate?.age ?? user.age;
  //   user.name = userUpdate?.name ?? user.name;
  //   user.lastName = userUpdate?.lastName ?? user.lastName;

  //   this.users = this.users.map((u) => {
  //     if (u.id === id) {
  //       return user;
  //     }
  //     return u;
  //   });

  //   return true;
  // }

  // deleteUser(id: string) {
  //   this.users = this.users.filter((user) => {
  //     if (user.id !== id) {
  //       return user;
  //     }
  //   });
  //   return true;
  // }
}
