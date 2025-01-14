import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async signup(signupData: any) {
    signupData.password = await bcrypt.hash(signupData.password, 10);
    this.usersRepository.create(signupData);
    const user = await this.usersRepository.save(signupData);
    return user;
  }
}
 