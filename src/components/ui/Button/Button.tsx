import { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Buttton: FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  className,
  ...props
}) => {
  return (
    <button className={cn(className, styles.btn, styles[variant])} {...props}>
      {children}
    </button>
  );
};
