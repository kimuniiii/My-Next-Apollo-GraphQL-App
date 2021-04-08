import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Topページ</title>
      </Head>
      <StTitle>Topページ</StTitle>
      <Link href="/posts">
        <a>First Postページへ遷移します</a>
      </Link>
    </>
  );
};

export default Home;

const StTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;
