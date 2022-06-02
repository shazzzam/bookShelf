import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}
