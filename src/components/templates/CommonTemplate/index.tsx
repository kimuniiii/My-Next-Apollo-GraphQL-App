import React, { VFC, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const CommonTemplate: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
