/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
import { Injectable } from '@nestjs/common';
import { BookDto, CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private Books: BookDto[] = [
    { id: 21, name: 'Twenty-First Book', createdAt: 2012, isEnglish: true },
    { id: 22, name: 'Twenty-Second Book', createdAt: 2014, isEnglish: false },
    { id: 23, name: 'Twenty-Third Book', createdAt: 2016, isEnglish: true },
    { id: 24, name: 'Twenty-Fourth Book', createdAt: 2018, isEnglish: false },
    { id: 25, name: 'Twenty-Fifth Book', createdAt: 2020, isEnglish: true },
  ];
  create(createBookDto: CreateBookDto) {
    const newId = [...this.Books].sort((a: any, b: any) => b.id - a.id);
    const genNewId = this.Books.length > 0 ? Number(newId[0].id) + 1 : 1;
    console.log('newId', genNewId);

    const newBook = {
      id: genNewId,
      ...createBookDto,
    };
    this.Books.push(newBook);

    // return 'This action adds a new book';
    return {
      msg: 'Book Created',
      newBook,
    };
  }

  findAll(eng?: any) {
    // check
    if (eng !== undefined) {
      const filteredBooks = this.Books.filter((book) => book.isEnglish === eng);

      return {
        msg: 'Filtered Books',
        length: filteredBooks.length,
        filteredBooks,
      };
    }
    return {
      msg: 'All Books',
      length: this.Books.length,
      books: this.Books,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
