import styled, { css } from 'styled-components';

const BTN_STYLE = css`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 10;

  width: 40px;
  height: 100%;
  background: black;
  opacity: 0.7;
  border-radius: 8px;
`;

export const DivWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  padding: 0 40px;
  width: 100%;
`;

export const DivAnimationCarousel = styled.div<{
  xCoordinate: number;
  animationsEnabled: boolean;
}>`
  ${({ xCoordinate, animationsEnabled }) =>
    css`
      display: flex;
      transform: translateX(${xCoordinate}%);
      transition: ${animationsEnabled ? 'transform 0.5s ease' : 'none'};
    `}
`;

export const BtnPrev = styled.button`
  ${BTN_STYLE}
  left: 8px;
`;

export const BtnNext = styled.button`
  ${BTN_STYLE}
  right: 8px;
`;

export const DivItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 8px;
  flex-shrink: 0;
`;
