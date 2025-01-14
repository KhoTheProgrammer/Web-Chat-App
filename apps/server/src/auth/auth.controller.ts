import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateDto } from './dto/create.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signup(@Body() signupData: CreateDto){
        return this.authService.signup(signupData);
    }
}
