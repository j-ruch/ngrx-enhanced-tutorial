import { createActionGroup, props } from '@ngrx/store';

export const BookListActions = createActionGroup({
  source: 'Book List',
  events: {
    retrievedBookList: props<{ books: ReadonlyArray<Book> }>(),
  },
});