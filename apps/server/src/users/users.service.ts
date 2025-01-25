import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import * as bcrypt from "bcrypt"
import { CreateDto } from 'src/auth/dto/create.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: CreateDto) {
    const user = this.usersRepository.create({ ...userData });
    await this.usersRepository.save(user);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = this.usersRepository.findOneBy({ email: email });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async getUserByUsername(username: string) {
    const user = this.usersRepository.findOneBy({ username: username });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
 