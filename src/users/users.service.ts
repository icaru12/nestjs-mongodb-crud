import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<UserDocument> {
    return await this.userModel.findById(id).exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async deleteUser(id: string): Promise<UserDocument> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
