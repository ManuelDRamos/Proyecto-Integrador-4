import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UsersRepository) {}

  getAuth() {
    return 'Estas autenticado';
  }

  signIn(email: string, password: string) {
    if (!email || !password) {
      return 'Email and Password are required';
    }
    const user = this.userRepository.getUserByEmail(email);

    if (!user) {
      return 'Invalid credentials';
    }
    if (user.password === password) {
      return 'Logged in';
    }
    return 'Invalid credentials';
  }
}
