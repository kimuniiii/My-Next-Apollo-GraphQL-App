import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'src/styles/Color';

type Props = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

export const Presenter: FC<Props> = ({ id, isChecked, onChange }) => {
  return (
    <StContainer>
      <StTransparentInput
        id={id}
        type="checkbox"
        checked={isChecked}
        onClick={onChange}
      />
      <StLabel htmlFor={id} isChecked={isChecked}>
        <StCircle isChecked={isChecked} />
      </StLabel>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 48px;
  height: 24px;
`;

const StTransparentInput = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // 要素非表示・領域確保・クリック可能
  opacity: 0;
`;

const StLabel = styled.label<Pick<Props, 'isChecked'>>`
  // labelタグはデフォルトで「インライン要素」
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 12px;
  background-color: ${({ isChecked }) =>
    isChecked ? `${ColorPalette.BlueGreen}` : `${ColorPalette.Gray}`};
  transition: background-color 0.5s;
`;

const StCircle = styled.span<Pick<Props, 'isChecked'>>`
  position: absolute;
  top: 4px;
  bottom: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${ColorPalette.White};
  transition: transform 0.5s;
  ${({ isChecked }) =>
    isChecked
      ? css`
          transform: translateX(28px);
        `
      : css`
          transform: translateX(4px);
        `}
`;
