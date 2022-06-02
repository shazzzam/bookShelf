import { FC } from 'react';
import cn from 'classnames';
import { Droppable } from 'react-beautiful-dnd';

import { Book } from '..';

import { BookShelfProps } from './BookShelf.props';
import styles from './BookShelf.module.css';

export const BookShelf: FC<BookShelfProps> = ({ books, className }) => {
  return (
    <Droppable droppableId="shelf">
      {(provided) => (
        <ul
          className={cn(className, styles.bookshelf)}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {books.map((book, index) => (
            <Book book={book} index={index} key={book.id} />
          ))}
        </ul>
      )}
    </Droppable>
  );
};
