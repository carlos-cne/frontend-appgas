import React from 'react';

import {
  Container,
  ContainerProps,
  StyledInputProps,
  StyledInput,
} from './InputAtom.styles';

interface InputProps extends ContainerProps, StyledInputProps {
  placeHolder?: string;
  id?: string;
  name?: string;
}

export default function InputAtom(props: InputProps) {
  const {
    bgColor,
    fontSize,
    height,
    radius,
    width,
    placeHolder,
    color,
    id,
    name,
  } = props;
  return (
    <Container
      id={id}
      name={name}
      bgColor={bgColor}
      height={height}
      radius={radius}
      width={width}
    >
      <StyledInput
        fontSize={fontSize}
        placeholder={placeHolder}
        color={color}
      />
    </Container>
  );
}
