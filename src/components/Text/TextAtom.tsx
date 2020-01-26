import React from 'react';

import { StyledText } from './TextAtom.styles';

export interface TextProps {
  children: string;
  textFontSize: string;
  textFontWeight: 'regular' | 'bold';
  textColor: string;
  [textKeys: string]: string;
}

export default function TextAtom(props: TextProps) {
  const { textFontSize, textFontWeight, textColor, children, textKeys } = props;
  return (
    <StyledText
      fontSize={textFontSize}
      fontWeight={textFontWeight}
      color={textColor}
      {...textKeys}
    >
      {children}
    </StyledText>
  );
}
