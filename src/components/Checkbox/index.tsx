import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette } from 'src/styles/Color';

type Props = {
  name: string;
  value: string;
  text: string;
  disabled: boolean;
};

export const Checkbox: FC<Props> = ({
  name = '',
  value = '',
  text = '',
  disabled = false,
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput type="checkbox" name={name} value={value} />
      <StyledCheckboxIcon className="checkbox-icon" />
      <StyledText>{text}</StyledText>
    </StyledLabel>
  );
};

const StyledLabel = styled.label<Pick<Props, 'disabled'>>`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none; // テキストの範囲選択を出来ないようにする

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;

      .checkbox-icon {
        background-color: #d4dae2;
      }
    `}
`;

const StyledInput = styled.input`
  opacity: 0; // 要素を消したい。でもクリックしたいのでこれ。
  cursor: pointer;

  &:checked + .checkbox-icon {
    background: ${ColorPalette.Blue50};
    border-color: ${ColorPalette.Blue50};
  }

  &:checked + .checkbox-icon:after {
    opacity: 1;
  }
`;

const StyledCheckboxIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border: 3px solid #d4dae2;
  border-radius: 3px;

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 5px;
    width: 6px;
    height: 10px;
    border-style: solid;
    border-color: ${ColorPalette.White};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
`;

const StyledText = styled.span`
  font-size: 16px;
  margin-left: 8px;
  color: ${ColorPalette.Black};
`;
