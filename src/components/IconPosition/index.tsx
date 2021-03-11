import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element | JSX.Element[];
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export const IconPosition: FC<Props> = ({
  children,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <StIconBasePosition>
      <StIconAbsolutePosition
        top={top}
        bottom={bottom}
        left={left}
        right={right}
      >
        {children}
      </StIconAbsolutePosition>
    </StIconBasePosition>
  );
};

const StIconBasePosition = styled.div`
  position: relative;
`;

const StIconAbsolutePosition = styled.div<Omit<Props, 'children'>>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  bottom: ${({ bottom }) => `${bottom}px`};
  left: ${({ left }) => `${left}px`};
  right: ${({ right }) => `${right}px`};
`;
