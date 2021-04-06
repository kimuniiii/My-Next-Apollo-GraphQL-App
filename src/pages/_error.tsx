import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';

type Props = {
  title: string;
  errorCode: number;
};

const Error: NextPage<Props> = ({ title, errorCode }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {errorCode}
    </>
  );
};

Error.getInitialProps = async ({ res }: NextPageContext): Promise<Props> => {
  return {
    title: `Error: ${res!.statusCode}`,
    errorCode: res!.statusCode,
  };
};

export default Error;
