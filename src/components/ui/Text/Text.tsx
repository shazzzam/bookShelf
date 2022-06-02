import { createElement, FC } from 'react';
import cn from 'classnames';

import { TextProps } from './Text.props';
import styles from './Text.module.css';

export const Text: FC<TextProps> = ({
  children,
  variant = 'p',
  className,
  ...props
}) => {
  const classes = cn(className, styles.text, styles[variant]);
  return createElement(variant, { className: classes, ...props }, children);
};
