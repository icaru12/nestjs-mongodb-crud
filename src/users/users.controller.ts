import { Controller, Param, Body, Get, Post, Put, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto, @Res() response: Response) {
    try {
      const newUser = await this.usersService.createUser(createUserDto);
      return response.status(HttpStatus.CREATED).json(newUser);
    } catch (err) {
      return response.status(500).json({
        statusCode: 500,
        message: 'Unable to create the User.',
      });
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.updateUser(id, updateUserDto);
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string, @Res() response: Response) {
    const deletedUser = await this.usersService.deleteUser(id);
    if (!deletedUser) {
      throw new NotFoundException();
    }

    return response.status(HttpStatus.OK).send();
  }
}
