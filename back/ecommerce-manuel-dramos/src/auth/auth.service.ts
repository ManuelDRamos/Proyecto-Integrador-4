import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import * as brypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(user: Partial<Users>) {
    const { email, password } = user;

    const foundUser = await this.usersService.getUserByEmail(email);

    if (foundUser) {
      throw new BadRequestException('Usuario ya esta registrado');
    }

    const hashedPassword = await brypt.hash(password, 10);

    if (!hashedPassword) {
      throw new BadRequestException('Error de encriptacion');
    }

    return await this.usersService.addUser({
      ...user,
      password: hashedPassword,
    });
  }

  async signIn(email: string, password: string) {
    const foundUser = await this.usersService.getUserByEmail(email);

    if (!foundUser) {
      throw new BadRequestException('Credenciales Invalidas');
    }
    const passwordValid = await brypt.compare(password, foundUser.password);

    if (!passwordValid) {
      throw new BadRequestException('Credenciales Invalidas');
    }

    const userPayload = {
      id: foundUser.id,
      email: foundUser.email,
      isAdmin: foundUser.isAdmin,
    };

    const token = this.jwtService.sign(userPayload);

    return {
      message: 'El usuario ha iniciado sesion correctamente',
      token,
    };
  }
}
