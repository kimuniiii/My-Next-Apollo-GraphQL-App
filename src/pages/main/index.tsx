import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <StHomeRoot>
      <Link href="/posts">
        <a>First Postページへ遷移します</a>
      </Link>
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
