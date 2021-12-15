import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';

/**
 * React.memo と useCallback と useMemo の挙動を正しく理解するための Sample Page
 */
const MemoPage: NextPage = () => {
  const sumFunction = (a: number, b: number) => {
    return a + b;
  };

  const useMemoFunctionReturnValue = useMemo(() => {
    console.log('1回目は走る。2回目以降は走らない');
    return sumFunction(1, 2);
  }, []);

  console.log(useMemoFunctionReturnValue);

  return (
    <>
      <Head>
        <title>Reactのmemo化を検証するページ</title>
      </Head>
      <header>Header</header>
      <main>MemoPage</main>
      <button onClick={() => alert('clicked')}>ボタン</button>
      <footer>Footer</footer>
    </>
  );
};

export default MemoPage;
