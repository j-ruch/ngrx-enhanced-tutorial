import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { Book } from './book-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  bookCollection: Book[] = [];

  onAdd(bookId: string) {
    const book: Book = this.books.find((book) => book.id === bookId)!;
    if (this.bookCollection.indexOf(book) > -1) {
      return;
    }
    this.bookCollection.push(book);
  }

  onRemove(bookId: string) {
    this.bookCollection = this.bookCollection.filter(
      (book) => book.id !== bookId
    );
  }

  constructor(private booksService: GoogleBooksService) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
      console.log(this.books);
    });
  }
}
