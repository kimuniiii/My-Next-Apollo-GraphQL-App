import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const LazyImage: FC<Props> = ({
  className,
  src,
  alt,
  width,
  height,
}) => {
  return (
    <StImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

const StImage = styled.img`
  display: block;
  max-width: 1000px;
  width: 100%;
  height: auto;

  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  &.loaded {
    animation: loaded 300ms ease-in-out;
  }
`;
