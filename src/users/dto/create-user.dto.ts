import { IsEmail, IsString, IsNotEmpty, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  status: number;

  @IsArray()
  @IsOptional()
  favoriteFoods: string[];
}
