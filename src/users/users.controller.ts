/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IRole, IUser, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /*
    GET /users
    POST /users
    GET /users/:id
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') roles?: IRole) {
    return this.usersService.findAll(roles);
  }

  @Post()
  create(@Body() user: IUser) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: IUser) {
    return this.usersService.update(Number(id), userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
