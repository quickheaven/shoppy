import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';

@Injectable()
export class UsersService {
  createUser(data: CreateUserRequest) {
    // Logic to create a user will go here
    return { message: 'User created successfully', data };
  }
}
