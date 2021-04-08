import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FirstPost: NextPage = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <StTitle>First Post</StTitle>
      <Link href="/main">
        <a>Topページへ遷移します</a>
      </Link>
    </>
  );
};

export default FirstPost;

const StTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;
