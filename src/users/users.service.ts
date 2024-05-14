import { Injectable } from '@nestjs/common';

export type IRole = 'INTERN' | 'ENGINEER' | 'ADMIN';
export type IUser = {
  id?: any;
  name?: string;
  email?: string;
  role?: IRole;
};
@Injectable()
export class UsersService {
  private msg = null;

  private users: IUser[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];

  findAll(role?: IRole) {
    //check if role is passed

    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return {
      msg: 'All Users',
      length: this.users.length,
      data: this.users,
    };
  }

  findOne(id: number | string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return { msg: 'User not found' };
    }

    return {
      msg: 'Single User',
      user: user,
    };
  }

  create(user: IUser) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newId = this.users.length > 0 ? usersByHighestId[0].id + 1 : 1;

    const newUser = {
      id: newId,
      ...user,
    };
    this.users.push(newUser);
    return {
      msg: 'User Created',
      user: newUser,
    };
  }

  // update(
  //   id: number,
  //   updatedUser: { name?: string; email?: string; role?: IRole },
  // ) {
  //   this.users = this.users.map((user) => {
  //     if (user.id === id) {
  //       return { ...user, ...updatedUser };
  //     }
  //     return user;
  //   });

  //   return this.findOne(id);
  // }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    const updated = this.users.find((user) => user.id === Number(id));

    return {
      msg: 'User Updated',
      updated,
    };
  }

  delete(id: number) {
    this.users = this.users.filter((user) => user.id !== id);

    const removedUser = `User with id ${id} was deleted`;
    return {
      msg: 'User Deleted',
      removedUser,
    };
  }
}
