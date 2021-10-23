import { NextPage } from 'next';
import Head from 'next/head';

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js練習用トップページ</title>
      </Head>
      <header>Header</header>
      <main>TopPage</main>
      <footer>Footer</footer>
    </>
  );
};

export default TopPage;
