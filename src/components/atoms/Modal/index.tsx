import React, { FC } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const Modal: FC<Props> = ({ isOpen, setIsOpen }) => (
  <StModalOverlay isOpen={isOpen}>
    <StModalBody isOpen={isOpen}>
      <StModalTitle>モーダルタイトル</StModalTitle>
      <StModalContent>ここにはモーダル本文を記載します</StModalContent>
      <StCloseButton onClick={setIsOpen}>close</StCloseButton>
    </StModalBody>
  </StModalOverlay>
);

const StModalOverlay = styled.div<{ isOpen: boolean }>`
  /* 画面中央にモーダルを寄せる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* モーダル実装の際にはお決まりの実装 */
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  /* 初期表示 */
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms linear;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

const StModalBody = styled.div<{ isOpen: boolean }>`
  position: relative;
  text-align: center;
  width: 300px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  transform: translateY(0);
  transition: transform 400ms ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(-16px);
    `}
`;

const StModalTitle = styled.h3`
  color: #222;
  border-bottom: 1px solid #e4e4e4;
`;

const StModalContent = styled.div``;

const StCloseButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  width: 100px;
  height: 30px;
  color: #fff;
  background-color: #17d4e5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border-radius: 3px;
`;
