import styled from 'styled-components';

interface InputProps {
  width: string;
  height: string;
  bgColor: string;
}
export const Input = styled.input<InputProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
`;
