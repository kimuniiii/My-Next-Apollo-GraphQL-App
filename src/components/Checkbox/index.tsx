import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled: boolean;
  onClick: () => void;
};

export const Checkbox: FC<Props> = ({
  name = "",
  value = "",
  label = "",
  checked = false,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledBase>
      <StyledInput
        id="id"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
      />
      <StyledLabel>{label}</StyledLabel>
    </StyledBase>
  );
};

const StyledBase = styled.label`
  user-select: none;
`;

const StyledInput = styled.input`
  opacity: 0; // クリックはできるようにしたい
  cursor: pointer;
`;

const StyledLabel = styled.span`
  position: relative;
  cursor: pointer;
  color: #222222;

  &::before {
    position: absolute;
    bottom: -4px;
    left: -24px;
    content: "";
    width: 16px;
    height: 16px;
    border: 3px solid black;
    border-radius: 3px;
  }
`;
