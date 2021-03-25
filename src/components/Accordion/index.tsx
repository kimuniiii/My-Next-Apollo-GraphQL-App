import { MdKeyboardArrowUp } from 'react-icons/md';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'src/styles/Color';
import { IconPosition } from 'src/components/IconPosition';

type Props = {
  title: string;
  mainInfo: string | JSX.Element;
  isActive: boolean;
  onClick: () => void;
};

export const Accordion: FC<Props> = ({
  title,
  mainInfo,
  isActive,
  onClick,
}) => {
  return (
    <StAccordionContainer>
      <IconPosition top={16} right={4}>
        <StArrowUpWrapper isActive={isActive}>
          <MdKeyboardArrowUp size={24} />
        </StArrowUpWrapper>
      </IconPosition>
      <StTitleWrapper>
        <StTitle isActive={isActive} onClick={onClick}>
          {title}
        </StTitle>
      </StTitleWrapper>
      {isActive && <StContent>{mainInfo}</StContent>}
    </StAccordionContainer>
  );
};

const StAccordionContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const StTitleWrapper = styled.div`
  font-weight: bold;
  padding-top: 16px;
`;

const StTitle = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  user-select: none;
  height: 36px;
  color: ${ColorPalette.Black};
  border-bottom: ${({ isActive }) =>
    isActive
      ? `4px solid ${ColorPalette.Blue50}`
      : `4px solid ${ColorPalette.DarkGray}`};
`;

const StArrowUpWrapper = styled.div<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          transform: rotate(180deg);
          opacity: 1;
        `
      : css`
          opacity: 0.5;
        `};
`;

const StContent = styled.div`
  padding-top: 16px;
`;
