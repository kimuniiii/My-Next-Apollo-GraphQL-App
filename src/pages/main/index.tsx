import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const TopPage: NextPage = () => {
  return (
    <StRoot>
      <Head>
        <title>Topページ</title>
      </Head>
      <StFirstSection>
        <StTitle>Topページ</StTitle>
        <Link href="/posts">
          <a>First Postページへ遷移します</a>
        </Link>
      </StFirstSection>
      <StSecondSection>
        <h1>Slide2</h1>
      </StSecondSection>
      <StThirdSection>
        <h1>Slide3</h1>
      </StThirdSection>
    </StRoot>
  );
};

export default TopPage;

const StRoot = styled.div``;

const StFirstSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1fa;
`;

const StSecondSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2ff3b;
  opacity: 0.8;
`;

const StThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6bdcff;
`;

const StTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;
