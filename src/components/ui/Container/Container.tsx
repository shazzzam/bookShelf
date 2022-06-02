import { FC } from 'react';
import cn from 'classnames';

import { ContainerProps } from './Container.props';
import styles from './Container.module.css';

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
};
