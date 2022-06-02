import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';

import { useAppDispatch } from '../../store/hooks';
import { deleteBook } from '../../store/books/books.slice';

import { Buttton, Card, Shelf, Text } from '../ui';

import { BookProps } from './Book.props';
import styles from './Book.module.css';

export const Book: FC<BookProps> = ({ book, index, className }) => {
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(deleteBook(book.id));
  };
  return (
    <Draggable draggableId={String(book.id)} index={index}>
      {(prov) => (
        <li
          className={cn(className, styles.book)}
          ref={prov.innerRef}
          {...prov.draggableProps}
          {...prov.dragHandleProps}
          key={book.id}
        >
          <Card>
            <div className={styles['book-img']}>
              <div className={styles['book-wrapper']}>
                <div className={styles['book-book']}>
                  <div className={styles['book-front']}>
                    <div
                      className={styles['book-cover']}
                      style={{
                        backgroundImage: `url(${book.formats['image/jpeg']})`,
                      }}
                    />
                  </div>
                  <div className={styles['book-back']} />
                  <div className={styles['book-left']} />
                </div>
              </div>
            </div>
            <div className={styles.info}>
              <Text variant="h2">{book.title}</Text>
              <Text variant="h3">Authors: </Text>
              {book.authors.map((author) => (
                <Text className={styles.author} key={author.name} variant="p">
                  {author.name}
                </Text>
              ))}
              <Buttton onClick={deleteHandler} variant="primary">
                Delete Book
              </Buttton>
            </div>
          </Card>
          <Shelf />
        </li>
      )}
    </Draggable>
  );
};
