import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }


  // Оновити 
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userDtoPlain = { ...createUserDto };
    return this.userModel.create(userDtoPlain);
  }

}
