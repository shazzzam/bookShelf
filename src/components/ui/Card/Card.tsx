import { FC } from 'react';
import cn from 'classnames';

import { CardProps } from './Card.props';
import styles from './Card.module.css';

export const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(className, styles.card)} {...props}>
      {children}
    </div>
  );
};
