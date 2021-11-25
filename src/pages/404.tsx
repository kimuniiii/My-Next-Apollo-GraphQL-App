import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React, { Props } from 'react';

const Custom404Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>404Page</title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: 'red' }}>404</h1>
        <p>エラーが発生しているので修正してください</p>
      </div>
    </>
  );
};

export default Custom404Page;
