import React, { FC, ReactNode, Children } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode | ReactNode[];
};

export const Carousel: FC<Props> = ({ children }) => {
  // childrenから「boolean・null・undefined」を取り除くため
  const filteredChildren = Children.toArray(children);

  return (
    <StCarouselInnerContainer>
      {Children.map(filteredChildren, (child) => (
        <StCarouselInner>{child}</StCarouselInner>
      ))}
    </StCarouselInnerContainer>
  );
};
const StCarouselInnerContainer = styled.div`
  display: flex;
  max-width: 1000px;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StCarouselInner = styled.div`
  margin-right: 16px;
`;
