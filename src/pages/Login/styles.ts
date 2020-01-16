import styled from 'styled-components';

import { TitleTemplate, TextTemplate } from '../../components/Templates';
import px2vw from '../../style/px2vw';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, ${px2vw(40, 320)});
  grid-column-gap: ${px2vw(8, 320)};
  grid-auto-rows: min-content;
  justify-items: center;
  padding-left: ${px2vw(20, 320)};
  padding-right: ${px2vw(20, 320)};
  background-color: #3b8ac4;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled(TitleTemplate)`
  height: fit-content;
  grid-column: 1 / -1;
  font-size: ${px2vw(18, 320)};
  padding-top: 32px;
`;

export const Subtitle = styled(TextTemplate)`
  height: fit-content;
  grid-column: 1 / -1;
  font-size: ${px2vw(12, 320)};
  padding-top: 8px;
`;
