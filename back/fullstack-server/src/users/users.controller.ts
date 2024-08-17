import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwtauthguard';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  /*@Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
*/
  @UseGuards(JwtAuthGuard)
  @Post('add-user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('get-users')
  findAll() {
    return this.userService.findAll();
  }

  @Get('get-user/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }


  @Delete('delete-user/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
