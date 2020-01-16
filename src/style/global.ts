import { createGlobalStyle } from 'styled-components';
import px2vw from './px2vw';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Roboto', sans-serif;
    font-size: ${px2vw(16, 320)};

    @media (min-width: 768px) {
      font-size: ${px2vw(16, 768)};
    }

    @media (min-width: 1280px) {
      font-size: ${px2vw(16)};
    }
  }
  body {
    width: 100vw;
    height: 100vh;
  }
`;

export default Global;
