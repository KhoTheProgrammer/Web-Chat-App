import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateDto } from './dto/create.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userservice: UsersService,
    private jwtservice: JwtService,
    private config: ConfigService
  ) {}

  async signup(signupdata: CreateDto) {
    //generate the password hash
    const hash = await bcrypt.hash(signupdata.password, 10);

    //save the new user in the db
    const user = this.userservice.create({ ...signupdata, password: hash });

    //return user
    return user;
  }

  // Create token and return it to user
  async login(user: any) {
    try {
      const payload = { username: user.username, sub: user.id };
      return {
        access_token: this.jwtservice.sign(payload),
      };
    } catch (error) {
      
    }
  }

  async validateUser(username: string, password: string) {
    try {
      const user = await this.userservice.getUserByUsername(username);
      const hash = await bcrypt.compare(password, user.password);
      if (hash) {
        return user;
      }
      throw new HttpException('Incorrect credentials', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException('incorrect credentials', HttpStatus.NOT_FOUND);
    }
  }
}
