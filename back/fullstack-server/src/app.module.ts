import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [UsersModule, SequelizeModule.forRoot(dataBaseConfig), PassportModule.register({ defaultStrategy: 'jwt' }), AuthModule],
  controllers: [AppController],
  providers: [AppService,
    JwtStrategy],
})
export class AppModule { }
