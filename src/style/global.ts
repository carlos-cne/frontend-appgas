import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  body {
    width: 100vw;
    height: 100vh;
  }
`;

export default Global;
