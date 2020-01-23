/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
