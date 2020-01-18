import styled from 'styled-components';

interface TextProps {
  fontSize: string;
  color: string;
  fontWeight: 'regular' | 'bold';
}
export const Text = styled.p<TextProps>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`;
