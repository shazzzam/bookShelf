import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBook } from './books.interface';

export interface BooksState {
  books: IBook[];
  isBooksLoading: boolean;
  isBooksLoadingError: boolean;
  isBookDeleting: boolean;
  deletingBookId: number;
}

const initialState: BooksState = {
  books: [],
  isBooksLoading: false,
  isBooksLoadingError: false,
  isBookDeleting: false,
  deletingBookId: 0,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks: (state: BooksState) => {
      state.isBooksLoading = true;
      state.isBooksLoadingError = false;
    },
    getBooksSuccess: (state: BooksState) => {
      state.isBooksLoading = false;
      state.isBooksLoadingError = false;
    },
    getBooksFailure: (state: BooksState) => {
      state.isBooksLoading = false;
      state.isBooksLoadingError = true;
    },
    setBooks: (state: BooksState, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
    },
    deleteBook: (state: BooksState, action: PayloadAction<number>) => {
      state.isBookDeleting = true;
      state.deletingBookId = action.payload;
    },
    deleteBookConfirm: (state: BooksState) => {
      state.isBookDeleting = false;
    },
    deleteBookSuccess: (state: BooksState) => {
      state.deletingBookId = 0;
    },
    deleteBookReject: (state: BooksState) => {
      state.isBookDeleting = false;
      state.deletingBookId = 0;
    },
  },
});

export const {
  getBooks,
  getBooksSuccess,
  getBooksFailure,
  setBooks,
  deleteBook,
  deleteBookConfirm,
  deleteBookSuccess,
  deleteBookReject,
} = booksSlice.actions;

export default booksSlice.reducer;
