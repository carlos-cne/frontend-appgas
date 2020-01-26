import styled from 'styled-components';

type FontWeight = 'regular' | 'bold';
export interface StyledTextProps {
  fontSize: string;
  color: string;
  fontWeight: FontWeight;
}
export const StyledText = styled.p<StyledTextProps>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`;
