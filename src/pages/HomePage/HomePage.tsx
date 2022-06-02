import { FC, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { BookShelf } from '../../components';
import { Buttton, Container, Modal, Text } from '../../components/ui';

import { RootState } from '../../store';
import {
  deleteBookConfirm,
  deleteBookReject,
  getBooks,
  setBooks,
} from '../../store/books/books.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { reorder } from '../../utils/utils';

import { HomePageProps } from './HomePage.props';

export const HomePage: FC<HomePageProps> = () => {
  const dispatch = useAppDispatch();
  const { books, isBooksLoading, isBooksLoadingError, isBookDeleting } =
    useAppSelector((state: RootState) => state.books);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const newBooks = reorder(
      books,
      result.source.index,
      result.destination.index
    );

    dispatch(setBooks(newBooks));
  };

  const deleteConfirmHandler = () => {
    dispatch(deleteBookConfirm());
  };

  const deleteCancelHandler = () => {
    dispatch(deleteBookReject());
  };

  const reloadHandler = () => {
    dispatch(getBooks());
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Text variant="h1">My Book Shelf</Text>
        {isBooksLoadingError ? (
          <div>
            <Text variant="p">Error loading books, please try again</Text>
            <Buttton onClick={reloadHandler}>Try again</Buttton>
          </div>
        ) : isBooksLoading ? (
          <Text variant="p">Books loading, please wait</Text>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <BookShelf books={books} />
          </DragDropContext>
        )}
      </Container>
      {isBookDeleting && (
        <Modal cancel={deleteCancelHandler} confirm={deleteConfirmHandler}>
          Do you realy want to delete this book from your shelf?
        </Modal>
      )}
    </>
  );
};
