import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { LazyImage } from 'src/components/LazyImage';

const Home: NextPage = () => {
  return (
    <StHomeRoot>
      <LazyImage
        className="sample"
        src="/images/sample01.jpeg"
        alt="sample01"
        width={1200}
        height={675}
      />
      <LazyImage
        className="sample"
        src="/images/sample02.jpeg"
        alt="sample02"
        width={1200}
        height={675}
      />
      <LazyImage
        className="sample"
        src="/images/sample03.jpeg"
        alt="sample03"
        width={1200}
        height={675}
      />
    </StHomeRoot>
  );
};

export default Home;

const StHomeRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
