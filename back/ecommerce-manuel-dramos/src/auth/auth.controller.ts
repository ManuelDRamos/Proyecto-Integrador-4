import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'src/users/dtos/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth() {
    return this.authService.getAuth();
  }

  @Post('/signin')
  signIn(@Body() credentials: LoginUserDTO) {
    const { email, password } = credentials;
    return this.authService.signIn(email, password);
  }
}
