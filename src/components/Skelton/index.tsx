import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  width?: string;
  height?: string;
};

export const Skelton: FC<Props> = ({ width, height }) => {
  return <StSkelton width={width} height={height} />;
};

const skeltonLoading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const StSkelton = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(200, 200, 200, 0.6),
    transparent
  );
  animation: ${skeltonLoading} 0.3s infinite;
`;
