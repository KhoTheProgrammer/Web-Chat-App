import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './Guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupData: CreateDto) {
    return this.authService.signup(signupData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req: any) {
    return req.logout();
  }

  @Get('me')
  me() {
    return { mesage: 'hello world' };
  }
}
