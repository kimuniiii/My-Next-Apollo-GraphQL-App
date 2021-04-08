import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

const FirstPost: NextPage = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/main">
        <a>Back To Home</a>
      </Link>
    </>
  );
};

export default FirstPost;
