/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
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
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    console.log('book to be added', createBookDto);

    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll(@Query('eng') eng?: any) {
    console.log(typeof eng);
    // conversion
    const isEng = eng === 'true' ? true : eng === 'false' ? false : undefined;
    return this.booksService.findAll(isEng);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
