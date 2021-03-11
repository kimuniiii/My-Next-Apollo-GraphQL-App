import { MdKeyboardArrowUp } from 'react-icons/md';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

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
      <StArrowUpPosition>
        <StArrowUpIcon isActive={isActive}>
          <MdKeyboardArrowUp size={24} />
        </StArrowUpIcon>
      </StArrowUpPosition>
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
  padding-top: 16px;
`;

const StTitle = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  user-select: none;
  height: 36px;
  color: #222222;
  border-bottom: ${({ isActive }) =>
    isActive ? '4px solid skyblue' : '4px solid gray'};
`;

const StArrowUpPosition = styled.div`
  position: relative;
`;

const StArrowUpIcon = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 16px;
  right: 4px;

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
