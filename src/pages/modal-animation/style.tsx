import { keyframes } from 'styled-components';
import styled from 'styled-components';

const overlayFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const overlayFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const modalFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
`;

const modalFadeOut = keyframes`
  100% {
    opacity: 0.8;
  }
  0% {
    opacity: 0;
  }
`;

export const Root = styled.div<{
  isModalOpen: boolean;
}>`
  display: flex;
`;

export const Box = styled.div<{
  isModalOpen: boolean;
}>`
  width: ${({ isModalOpen }) => (!isModalOpen ? '100px' : '768px')};
  height: ${({ isModalOpen }) => (!isModalOpen ? '100px' : '500px')};
  cursor: pointer;
  transform: translateY(${({ isModalOpen }) => (!isModalOpen ? '0' : '50%')})
    translateX(${({ isModalOpen }) => (!isModalOpen ? '0' : '50%')});
  transition: all 0.8s ease-in-out;
`;

export const DivOverlay = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background-color: yellow;
  animation-name: ${({ isModalOpen }) => (isModalOpen ? overlayFadeIn : overlayFadeOut)};
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;

  > button {
    color: black;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Modal = styled.div<{
  isModalOpen: boolean;
}>`
  position: fixed;
  z-index: 1100;
  animation-name: ${({ isModalOpen }) => (isModalOpen ? modalFadeIn : modalFadeOut)};
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  width: ${({ isModalOpen }) => (!isModalOpen ? '100px' : '768px')};
  height: ${({ isModalOpen }) => (!isModalOpen ? '100px' : '500px')};
  top: ${({ isModalOpen }) => (isModalOpen ? '50%' : '0')};
  left: ${({ isModalOpen }) => (isModalOpen ? '50%' : '0')};
  transform: translateY(${({ isModalOpen }) => (isModalOpen ? '-50%' : '-100%')})
    translateX(${({ isModalOpen }) => (isModalOpen ? '-50%' : '-100%')});
  transition: all 0.8s ease-in-out;
`;

export const DivPlayerOverlay = styled.div<{ isPlayerOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1200;
  background-color: yellow;
  animation-name: ${({ isPlayerOpen }) => (isPlayerOpen ? overlayFadeIn : overlayFadeOut)};
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
`;
