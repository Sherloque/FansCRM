import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { ReactSsrModule } from './react-ssr/react-ssr.module';
import { ReactSsrService } from './react-ssr/react-ssr.service';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot(dataBaseConfig),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    AuthModule,
    ReactSsrModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy, ReactSsrService],
})
export class AppModule {}
