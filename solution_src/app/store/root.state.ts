import { BooksState } from './books/books.state';

export interface EntityState {
  error: string;
}

export interface RootState {
  // App Module
  booksState: BooksState;
  
  //// Sub Modules
}
