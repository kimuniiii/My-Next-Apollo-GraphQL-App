import React, { FC } from 'react';
import styled from 'styled-components';

import { ColorPalette } from 'src/styles/Color';

export const Footer: FC = () => {
  return <StFooterRoot>Footer</StFooterRoot>;
};

const StFooterRoot = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: ${ColorPalette.Green};
  color: ${ColorPalette.Black};
`;
