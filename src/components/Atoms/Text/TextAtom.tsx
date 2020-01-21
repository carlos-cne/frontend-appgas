import React from 'react';

import { StyledText, StyledTextProps } from './TextAtom.styles';

interface TextProps extends StyledTextProps {
  children: string;
  // [rest: string]: string; I don't know if this prop are required for now.
}

export default function TextAtom(props: TextProps) {
  const { fontSize, fontWeight, color, children } = props;
  return (
    <StyledText
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      // {...rest}
    >
      {children}
    </StyledText>
  );
}
