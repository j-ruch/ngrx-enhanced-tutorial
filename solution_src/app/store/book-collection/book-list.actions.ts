import { createActionGroup, props } from '@ngrx/store';

export const BookCollectionActions = createActionGroup({
  source: 'Book Collection',
  events: {
    addBook: props<{ bookId: string }>(),
    removeBook: props<{ bookId: string }>(),
  },
});
