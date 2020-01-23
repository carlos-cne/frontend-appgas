import React from 'react';

import { Title, Subtitle } from './LoginHeader.styles';
import Layout from '../../components/Layout';
import InputMolecule from '../../components/Molecules/InputMolecule/InputMolecule';

export default function LoginHeader() {
  return (
    <Layout>
      <Title>Bem vindo ao Sisgás!</Title>
      <Subtitle>Seu sistema de gestão de entregas</Subtitle>
      <InputMolecule />
    </Layout>
  );
}
