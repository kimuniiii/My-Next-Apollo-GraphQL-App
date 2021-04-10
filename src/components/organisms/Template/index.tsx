import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const Template: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const StBase = styled.div``;
