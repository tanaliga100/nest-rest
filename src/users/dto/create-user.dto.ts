/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
export class CreateUserDTO {
  name: string;
  email: string;
  role: 'INTERN' | 'ADMIN' | 'DEV' | 'ENGINEER';
}
