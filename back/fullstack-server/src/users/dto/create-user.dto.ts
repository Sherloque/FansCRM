import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  phone: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}