/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
export class CreateBookDto {
  id: number;
  name: string;
  createdAt: number;
  isEnglish: boolean;
}

export class BookDto {
  id: number | string;
  name: string;
  createdAt: number;
  isEnglish: boolean;
}
