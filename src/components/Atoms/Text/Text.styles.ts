import styled from 'styled-components';

export interface StyledTextProps {
  fontSize: string;
  color: string;
  fontWeight: 'regular' | 'bold';
}
export const StyledText = styled.p<StyledTextProps>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`;
