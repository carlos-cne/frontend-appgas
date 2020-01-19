import React from 'react';

import {
  Container,
  ContainerProps,
  StyledInputProps,
  StyledInput,
} from './Input.styles';

interface InputProps extends ContainerProps, StyledInputProps {
  placeHolder?: string;
}

export default function Input(props: InputProps) {
  const {
    bgColor,
    fontSize,
    height,
    radius,
    width,
    placeHolder,
    placeholderColor,
    color,
  } = props;
  return (
    <Container bgColor={bgColor} height={height} radius={radius} width={width}>
      <StyledInput
        fontSize={fontSize}
        placeholder={placeHolder}
        color={color}
        placeholderColor={placeholderColor}
      />
    </Container>
  );
}
