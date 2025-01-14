import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userservice: UsersService) {}

  async signup(signupData) {
    return this.userservice.signup(signupData);
  }
}
