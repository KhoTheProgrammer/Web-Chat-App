import { Injectable } from '@nestjs/common';
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
}
 