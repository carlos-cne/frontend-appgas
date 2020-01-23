import React from 'react';

import { Container, StyledInput } from './InputAtom.styles';

export interface InputProps {
  placeHolder: string;
  inputId: string;
  inputName: string;
  inputBgColor: string;
  inputFontSize: string;
  inputHeight: string;
  inputRadius: string;
  inputWidth: string;
  inputTextColor: string;
  [inputKeys: string]: string;
}

export default function InputAtom(props: InputProps) {
  const {
    inputBgColor,
    inputFontSize,
    inputHeight,
    inputRadius,
    inputWidth,
    inputPlaceholder,
    inputTextColor,
    inputId,
    inputName,
    inputKeys,
  } = props;
  return (
    <Container
      id={inputId}
      name={inputName}
      bgColor={inputBgColor}
      height={inputHeight}
      radius={inputRadius}
      width={inputWidth}
      {...inputKeys}
    >
      <StyledInput
        fontSize={inputFontSize}
        placeholder={inputPlaceholder}
        color={inputTextColor}
      />
    </Container>
  );
}
