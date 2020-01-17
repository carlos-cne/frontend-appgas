import styled from 'styled-components';

import { TitleTemplate, TextTemplate } from '../../components/Templates';
import px2vw from '../../style/px2vw';

export const Title = styled(TitleTemplate)`
  height: fit-content;
  grid-column: 1 / -1;
  font-size: 1.125rem;
  padding-top: ${px2vw(32, 320)};
`;

export const Subtitle = styled(TextTemplate)`
  height: fit-content;
  grid-column: 1 / -1;
  font-size: 0.75rem;
  padding-top: ${px2vw(8, 320)};
`;
