import React from "react";
import styled, { css } from "styled-components";

type Props = {
  text: string;
  isDisabled: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ text = "", isDisabled, onClick }) => {
  return (
    <>
      <StyledButton isDisabled={isDisabled} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button<Pick<Props, "isDisabled">>`
  background-color: #ffffff;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  padding: 5px 15px;
  outline: none;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #67c5ff;
  }
  &:active {
    background-color: #1a4d80;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `};
`;
