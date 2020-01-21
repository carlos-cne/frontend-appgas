import React from 'react';

import InputAtom from '../../Atoms/Input/InputAtom';
import TextAtom from '../../Atoms/Text/TextAtom';

import { Container } from './InputMolecule.styles';

export default function InputMolecule() {
  return (
    <Container>
      <TextAtom
        as="label"
        htmlFor="input-email"
        color="#EFDBCB"
        fontSize="14px"
        fontWeight="regular"
      >
        Email
      </TextAtom>
      <InputAtom
        id="input-email"
        bgColor="#345DA7"
        color="#EFDBCB"
        fontSize="14px"
        height="48px"
        width="100%"
        radius="4px"
        placeHolder="exemplo@email.com"
      />
    </Container>
  );
}
