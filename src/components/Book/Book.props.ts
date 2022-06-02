import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IBook } from '../../store/books/books.interface';

export interface BookProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  book: IBook;
  index: number;
}
