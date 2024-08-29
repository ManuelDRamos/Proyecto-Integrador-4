import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from 'src/users/dtos/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() user: CreateUserDTO) {
    const { passwordConfirmation, ...cleanUser } = user;
    return this.authService.signUp(cleanUser);
  }

  @Post('/signin')
  signIn(@Body() credentials: LoginUserDTO) {
    const { email, password } = credentials;
    return this.authService.signIn(email, password);
  }
}
