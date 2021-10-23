import React, { FC } from 'react';
import styled from 'styled-components';

import { ColorPalette } from 'src/styles/Color';

export const Header: FC = () => {
  return <StHeaderRoot>Header</StHeaderRoot>;
};

const StHeaderRoot = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: ${ColorPalette.Green};
  color: ${ColorPalette.Black};
`;
