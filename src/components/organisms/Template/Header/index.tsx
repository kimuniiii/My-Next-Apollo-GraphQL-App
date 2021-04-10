import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = () => {
  return <StHeaderRoot>Header</StHeaderRoot>;
};

const StHeaderRoot = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #222;
  color: #fff;
  opacity: 0.7;
`;
