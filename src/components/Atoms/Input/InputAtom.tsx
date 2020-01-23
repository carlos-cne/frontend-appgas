import React from 'react';

import { Container, StyledInput } from './InputAtom.styles';

interface InputProps {
  placeHolder: string;
  id: string;
  name: string;
  bgColor: string;
  fontSize: string;
  height: string;
  radius: string;
  width: string;
  color: string;
  [key: string]: string;
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
    key,
  } = props;
  return (
    <Container
      id={id}
      name={name}
      bgColor={bgColor}
      height={height}
      radius={radius}
      width={width}
      {...key}
    >
      <StyledInput
        fontSize={fontSize}
        placeholder={placeHolder || ''}
        color={color}
      />
    </Container>
  );
}
