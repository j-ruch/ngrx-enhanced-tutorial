# NgRx Tutorial

This repository provides a short introduction into the topics of NgRx covering the following concepts and components:

- Actions
- Reducers
- States
- Selectors

Effects are not covered in this tutorial.
This tutorial is based on the official [NgRx tutorial](https://ngrx.io/guide/store/walkthrough).

To run the demo application please run:

```bash
npm install && npm run build && npm run start
```

## Current Implementation

The folder book-list contains a books.model.ts file, which defines a model or DTO.
The books.service.ts implements a service calling a Google Books API and returning an array of books.

The book-list.component.html displays this list of books as the 'Available Books' with a 'Add to Collection' button next to each list element.
This button adds the book to a separate collection displayed beneath the available books, which represents our selected collection of books.

The book-collection.component.html displays said list of selected books as 'My Collection' with a 'Remove from Collection' button next to each list element.
This respectively removes the book from the list.

The code to fetch the available books, add and remove books is implemented in the app.component.ts.
We now want to get rid of the existing code and replace it with NgRx code snippets respectively.

## NgRx Re-Implementation

We start by creating the additional NgRx classes before we re-implement the app.component.ts.
Start by creating a 'state' folder beneath the 'app' folder: 'app > state'

### Actions

Now we think about the necessary actions to perform in our book-collection example.
First we need to fetch all books from the API and then we also want to add and remove books from collections.
So we create a 'books.actions.ts' file within the 'state' folder and paste the following content:

```typescript
import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    addBook: props<{ bookId: string }>(),
    removeBook: props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    retrievedBookList: props<{ books: ReadonlyArray<Book> }>(),
  },
});
```

We create an action group for book actions for adding and removing books from our collection and another action group for API calls to fetch a list of books.
The source key defines an identifier, which can be used for debugging the actions.
The event key specifies all the events belonging into the respective action group.
The props<{}> are parameters for the respective actions, e.g. when executing the action 'addBook' we provide a parameter 'bookId'.

### Reducers

We then need reducers to react to the actions and reduce the values into a state.
Create a file 'books.reducer.ts' in the 'state' subfolder and copy the respective code.

```typescript
import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
```

TODO: Describe what happens when a reducer returns a new state

This reducer represents the fetched books and stores them in an array.
The initialState represents an empty array of books.
The reducer selects the initialState an whenever the 'retrievedBookList' action is dispatched, we execute a lambda and return the books array.
The lambda `(_state, { books }) => books)` takes two parameters, the current state and the fetched list of books.
In this case we ignore the existing state and just return the fetched books.

Create a file 'collection.reducer.ts' under the 'state' folder and copy the following code:

```typescript
import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
```

This similar reducer now considers all actions dispatched to update our own collection of books.
Be aware that the initial state is an array of strings, representing the books titles.
When a book is removed, the current state applies a filter on the title.
When a book is added, we check if the book is not present in the list, in case it is we just return the already existing state, otherwise we add the title.

### Selectors

Now we want to select all the elements present in the list, we create a 'books.selectors.ts' file beneath the 'state' folder and copy the following code:

```typescript
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
```

Be aware that the actual selector 'selectBookCollection' combines two selectors and then returns a collection of books.
The function takes a list of books and a list of titles, filters all equal titles and then returns the new list.

### App Component

We now adapt the app component, let's start from the bottom of the file and go up to the top.

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
```

First of all we add the store to the constructor.
Then we adapt the 'ngOnInit' method to dispatch the 'retrievedBookList' action instead of setting the books in local variables.
Then we dispatch actions for adding and removing books accordingly.
Eventually we also want to select the state and update our model, replace the current variables with Observables and initialize them with selector-calls.
Be aware that adding a '$' as a suffix to the variable name is common/good practice.

Now that we have Observables instead of variables we mustn't forget to adapt our 'app.component.html' code as well.
Lets introduce asynchronous evaluation by changing the `[books]="books"` to `[books]="(books$ | async)"` and the book-collection accordingly.

```typescript
<h2>Books</h2>
<app-book-list class="book-list" [books]="(books$ | async)!" (add)="onAdd($event)"></app-book-list>

<h2>My Collection</h2>
<app-book-collection class="book-collection" [books]="(bookCollection$ | async)!" (remove)="onRemove($event)">
</app-book-collection>
```

Eventually we need to adapt the 'app.module.ts' file to accommodate for the new NgRx Store.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

We add the imports for the store module and the reducers.
The we add the configuration for the StoreModule as 'forRoot' in the imports configuration of the AppModule.
The solutions are also present in a separate 'solution_files' folder.

## Improvements

Now we are using two collections, one for fetched books and a collection with titles.
Whenever we select the arrays, we still need to map both collections with each other, this might be sufficient for this example, but in larger applications with more data, this does not work out.
I suggest using a collection of books as well, instead of a collection of strings, and adapt the actions for adding and removing books accordingly.

The current implementation still relies on the google-service to fetch all books from the api and then calling actions.
This can be handled outside of the app component with effects.
