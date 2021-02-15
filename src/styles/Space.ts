import { css } from "styled-components";

const minSpaceSize = 4 as const;

export const getSpace = (val: number): string => {
  return `${minSpaceSize * val}px`;
};

export const getSquareCss = (size: number) => {
  const value = `${size}px`;

  return css`
    width: ${value};
    height: ${value};
  `;
};
