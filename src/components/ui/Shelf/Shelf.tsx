import { FC } from 'react';
import cn from 'classnames';

import { ShelfProps } from './Shelf.props';
import styles from './Shelf.module.css';

export const Shelf: FC<ShelfProps> = ({ className, ...props }) => {
  return <div className={cn(className, styles.shelf)} {...props} />;
};
