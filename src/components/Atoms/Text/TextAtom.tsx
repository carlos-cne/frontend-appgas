import React from 'react';

import { StyledText } from './TextAtom.styles';

interface TextProps {
  children: string;
  fontSize: string;
  fontWeight: 'regular' | 'bold';
  color: string;
  [key: string]: string;
}

export default function TextAtom(props: TextProps) {
  const { fontSize, fontWeight, color, children, key } = props;
  return (
    <StyledText
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      {...key}
    >
      {children}
    </StyledText>
  );
}
