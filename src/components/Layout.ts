import styled from 'styled-components';
import px2vw from '../style/px2vw';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, ${px2vw(40, 320)});
  grid-column-gap: ${px2vw(8, 320)};
  grid-auto-rows: min-content;
  justify-items: center;
  padding-left: ${px2vw(20, 320)};
  padding-right: ${px2vw(20, 320)};
`;

export default Layout;
