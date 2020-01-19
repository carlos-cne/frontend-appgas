import styled from 'styled-components';

export interface ContainerProps {
  width: string;
  height: string;
  bgColor: string;
  radius: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.radius};
`;

export interface StyledInputProps {
  fontSize: string;
  color: string;
  placeholderColor: string;
}

export const StyledInput = styled.input.attrs((props: StyledInputProps) => ({
  placeholder: {
    color: props.placeholderColor,
  },
}))<StyledInputProps>`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-size: ${props => props.fontSize};
  outline: none;
  color: ${props => props.color};
`;
