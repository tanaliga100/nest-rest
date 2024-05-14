import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    GET /users
    POST /users
    GET /users/:id
    PATCH /users/:id
    DELETE /users/:id
    */
  users = [
    {
      id: 1,
      name: 'jordan',
      role: 'intern',
    },
    {
      id: 2,
      name: 'iza',
      role: 'interns',
    },
  ];
  @Get()
  findAll() {
    return this.users;
  }

  @Post()
  create(@Body() user: Record<string, never>) {
    return {
      msg: 'User Created',
      user,
    };
  }

  // @Get('interns')
  // findAllInterns() {
  //   return {
  //     msg: ' ALl interns',
  //     data: [],
  //   };
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: Record<string, never>) {
    // const user = this.users.find((u) => u.id.toString() === id.toString());
    // console.log('current_user', typeof user);

    const userExist = this.users.find(
      (user) => user.id.toString() === id.toString(),
    );
    console.log('userExist', userExist);

    // if (!userUpdate) {
    //   // throw new Error('No User with that ID');
    //   return 'No User with that ID';
    // }
    return {
      id,
      ...userUpdate,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const user = this.users.find((u) => u.id.toString() === id.toString());
    console.log('current_user', typeof user);

    if (!user) {
      // throw new Error('No User with that ID');
      return 'No User with that ID';
    }

    return {
      msg: `User.Deleted.with.id.${id}`,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.users.find((u) => u.id.toString() === id.toString());
    console.log('current_user', typeof user);

    if (!user) {
      // throw new Error('No User with that ID');
      return 'No User with that ID';
    }

    return user;
  }

  // return { id };
}
