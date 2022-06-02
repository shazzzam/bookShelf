import { configureStore } from '@reduxjs/toolkit';
import { all, call } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import booksSlice from './books/books.slice';
import booksSaga from './books/books.saga';

const saga = createSagaMiddleware();
function* rootSaga() {
  yield all([call(booksSaga)]);
}

export const store = configureStore({
  reducer: {
    books: booksSlice,
  },
  middleware: [saga],
});
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
