import React from 'react';

import InputAtom, { InputProps } from '../../Atoms/Input/InputAtom';
import TextAtom, { TextProps } from '../../Atoms/Text/TextAtom';

import { Container } from './InputMolecule.styles';

interface InputMoleculeProps extends InputProps, TextProps {}

export default function InputMolecule(props: InputMoleculeProps) {
  const {
    textColor,
    textFontSize,
    textFontWeight,
    textKeys,
    inputBgColor,
    inputFontSize,
    inputHeight,
    inputId,
    inputName,
    inputRadius,
    inputTextColor,
    inputWidth,
    inputKeys,
    placeHolder,
  } = props;
  return (
    <Container>
      <TextAtom
        textColor={textColor}
        textFontSize={textFontSize}
        textFontWeight={textFontWeight}
        {...textKeys}
      >
        Email
      </TextAtom>
      <InputAtom
        inputName={inputName}
        inputId={inputId}
        inputBgColor={inputBgColor}
        inputTextColor={inputTextColor}
        inputFontSize={inputFontSize}
        inputHeight={inputHeight}
        inputWidth={inputWidth}
        inputRadius={inputRadius}
        placeHolder={placeHolder}
        {...inputKeys}
      />
    </Container>
  );
}
