import { css } from 'styled-components';

const minSpaceSize = 4 as const;

/**
 * 4の倍数を用いてpx指定を行うときに用いる関数
 */
export const getSpace = (val: number): string => {
  return `${minSpaceSize * val}px`;
};

/**
 * 正方形を作成したいときに用いる関数
 */
export const getSquareCss = (size: number) => {
  const value = `${size}px`;

  return css`
    width: ${value};
    height: ${value};
  `;
};
