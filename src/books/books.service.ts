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

  findAll(isEnglish?: boolean, name?: string, from?: number) {
    // check
    // Initial filteredBooks array contains all books
    let filteredBooks = this.Books;

    // Filter by isEnglish if the parameter is provided
    if (isEnglish !== undefined) {
      filteredBooks = filteredBooks.filter(
        (book) => book.isEnglish === isEnglish,
      );
    }
    // Filter by name if the parameter is
    if (name) {
      filteredBooks = filteredBooks.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    // Filter by date if the parameter is
    if (from) {
      filteredBooks = filteredBooks.filter((book) => book.createdAt >= from);
    }
    return {
      msg: isEnglish !== undefined || name ? 'Filtered Books' : 'All Books',
      length:
        filteredBooks.length > 0
          ? `Has ${filteredBooks.length} ${filteredBooks.length === 1 ? `record` : 'records'}`
          : `Has no records`,
      books: filteredBooks,
    };
  }

  findOne(id: number) {
    const book = this.Books.find((book) => book.id === id);
    if (book === undefined) {
      return {
        msg: 'No Record',
      };
    }
    return {
      msg: 'Fetched Book',
      book,
    };
    return `This action returns a #${id} book`;
  }

  update(id?: number, updateBookDto?: UpdateBookDto) {
    console.log('new book', updateBookDto);

    //get bookk;
    this.Books = this.Books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updateBookDto };
      }
      return book;
    });

    // const updatedBook = {
    //   ...currentBook,
    //   updateBookDto,
    // };
    const updatedBook = this.Books.find((book) => book.id === Number(id));
    return {
      msg: `Updated Book`,
      updatedBook,
    };

    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    this.Books = this.Books.filter((book) => book.id !== id);
    const removedBook = `Book with id ${id} was deleted`;
    const updated = this.findAll();
    return {
      msg: removedBook,
      updated,
    };
  }
}
