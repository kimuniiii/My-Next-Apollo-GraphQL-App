import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { CommonTemplate } from 'src/components/templates/CommonTemplate';

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Topページ</title>
      </Head>

      <CommonTemplate>
        <StFirstSection>
          <StTitle>Topページ</StTitle>
          <Link href='/posts'>
            <a>投稿リストページへ遷移します</a>
          </Link>
        </StFirstSection>

        <StSecondSection>
          <h1 css='color: red'>Slide2</h1>
        </StSecondSection>

        <StThirdSection>
          <h1 css='color: yellow'>Slide3</h1>
        </StThirdSection>
      </CommonTemplate>
    </>
  );
};

export default TopPage;

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
