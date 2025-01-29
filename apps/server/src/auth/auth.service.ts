import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateDto } from './dto/create.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userservice: UsersService) {}

  async signup(signupdata: CreateDto) {
    //generate the password hash
    const hash = await bcrypt.hash(signupdata.password, 10);

    //save the new user in the db
    const user = this.userservice.create({ ...signupdata, password: hash });

    //return user
    return user;
  }
}
