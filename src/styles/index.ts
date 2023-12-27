import  { createGlobalStyle } from 'styled-components';
import { resetCSS } from './reset';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1890ff;
    --color-primary-dark: #096dd9;
    --color-primary-light: #bae7ff;
    --color-primary-lighter: #e6f7ff;
    --color-primary-lightest: #f0f5ff;
    --color-primary-darker: #0050b3;
    width: 100%;
  }
  ${resetCSS}
`