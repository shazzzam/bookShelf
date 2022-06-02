import { takeEvery, put, select, call } from 'redux-saga/effects';

import { API } from '../../consts/api';

import { RootState } from '..';

import {
  getBooksSuccess,
  getBooksFailure,
  setBooks,
  deleteBookSuccess,
} from './books.slice';
import { IAPIRoot, IBook } from './books.interface';

function* workGetColumns() {
  try {
    const response: Response = yield call(() => fetch(API.LIST));
    const responseJson: IAPIRoot = yield response.json();
    yield put(setBooks(responseJson.results));
    yield put(getBooksSuccess());
  } catch {
    yield put(getBooksFailure());
  }
}

function* workDeleteBookConfirm() {
  const { deletingBookId, books } = yield select(
    (state: RootState) => state.books
  );
  const newBooks = books.filter((book: IBook) => book.id !== deletingBookId);
  yield put(setBooks(newBooks));
  yield put(deleteBookSuccess());
}

function* tasksSaga() {
  yield takeEvery('books/getBooks', workGetColumns);
  yield takeEvery('books/deleteBookConfirm', workDeleteBookConfirm);
}

export default tasksSaga;
