import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IBook } from '../../store/books/books.interface';

export interface BookShelfProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  books: IBook[];
}
