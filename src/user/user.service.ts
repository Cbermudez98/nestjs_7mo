import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, IUserCreate, IUserUpdate } from 'src/interface/IUser';
import { v4 } from 'uuid';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  private users: IUser[] = [];
  // Patron Repository -> Que nos permite interractuar con la base de datos a travez de una clase (Rositorio)
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async getUsers() {
    let users: IUser[] | undefined;
    try {
      users = await this.userRepository.find();
    } catch (error) {
      // Ya me ofrece errores
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get users',
      });
    }

    if (!users) {
      throw new NotFoundException('Not found', {
        description: 'Users not found',
      });
    }
    return users;
  }

  async getUser(id: number) {
    let user: IUser | undefined;
    try {
      user = await this.userRepository.findOne({
        where: { id },
        relations: ['tasks'],
      });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!user) {
      throw new NotFoundException('Not found', {
        description: 'User not found',
      });
    }
    return user;
  }

  async createUser(user: IUserCreate) {
    try {
      const newUser = this.userRepository.create(user);
      await this.userRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException('Error at saving the database', {
        description: 'Error trying to save user',
      });
    }
  }

  async updateUser(id: number, userUpdate: IUserUpdate) {
    let user: IUser | undefined;
    try {
      user = await this.userRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!user) {
      throw new NotFoundException('User not found', {
        description: 'User does not exists in my app',
      });
    }

    user.age = userUpdate?.age ?? user.age;
    user.name = userUpdate?.name ?? user.name;
    user.lastName = userUpdate?.lastName ?? user.lastName;

    try {
      await this.userRepository.save(user);
    } catch (error) {
      throw new UnprocessableEntityException('Unprocessable error', {
        description: 'Error at updating user',
      });
    }
    return true;
    // let user: IUser | undefined = this.users.find(
    //   (value: IUser) => value.id === id,
    // );
    // if (!user) {
    //   throw new NotFoundException('User not found', {
    //     description: 'User does not exists in my app',
    //   });
    // }

    // user.age = userUpdate?.age ?? user.age;
    // user.name = userUpdate?.name ?? user.name;
    // user.lastName = userUpdate?.lastName ?? user.lastName;

    // this.users = this.users.map((u) => {
    //   if (u.id === id) {
    //     return user;
    //   }
    //   return u;
    // });

    // return true;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => {
      if (user.id !== id) {
        return user;
      }
    });
    return true;
  }
}
