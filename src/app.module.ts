import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarkModule } from './bookmark/bookmark.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, BookmarkModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
