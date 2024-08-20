import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/entities/user.entity';
import { JwtPayload } from './jwt.strategy';
import * as bcrypt from 'bcrypt';

export interface AccessToken {
  access_token: string;
}


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<AccessToken> {
    const payload: JwtPayload = { email: user.email, sub: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}