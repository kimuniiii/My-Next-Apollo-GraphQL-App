import type { NextPage } from 'next';
import Head from 'next/head';

import shuffle from 'lodash/shuffle';

const SamplePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js練習用サンプルページ</title>
      </Head>
      <header>Header</header>
      <main>SamplePage</main>
      <p>{shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</p>
      <footer>Footer</footer>
    </>
  );
};

export default SamplePage;
