import React, { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = () => {
  return (
    <StFooterRoot>
      <StFooterContent>Footer</StFooterContent>
    </StFooterRoot>
  );
};

const StFooterRoot = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #222;
  color: #fff;
  opacity: 0.7;
`;

const StFooterContent = styled.div``;
