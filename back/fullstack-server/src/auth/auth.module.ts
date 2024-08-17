import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [UsersModule, JwtModule.registerAsync({
        useFactory: async () => ({
            secret: 'secret',
            signOptions: { expiresIn: '60m' },
        }),
    }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService, JwtModule],

})
export class AuthModule { }
