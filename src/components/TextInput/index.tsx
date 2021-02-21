import React, { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

import { ColorPalette, Tokens } from '../../styles/Color';

type Props = {
  type: 'text' | 'email' | 'password' | 'tel';
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: React.FC<Props> = ({
  type,
  id,
  name,
  value,
  placeholder,
  maxLength,
  readOnly,
  disabled,
  onChange,
}) => {
  return (
    <StyledBase>
      <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
    </StyledBase>
  );
};

const StyledBase = styled.div`
  width: 100%;
`;

const StyledInput = styled.input<Pick<Props, 'disabled'>>`
  width: 100%;
  height: 32px;
  padding-left: 8px;
  font-weight: bold;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
      background-color: ${Tokens.Disabled};
    `}
`;
