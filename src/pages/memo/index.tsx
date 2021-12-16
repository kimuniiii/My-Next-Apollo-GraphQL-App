import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';

/**
 * @概要 React.memo と useCallback と useMemo の挙動を正しく理解するための Sample Page
 * @説明1 React.memo : コンポーネントのメモ化ができるHOC
 * @説明2 useCallback : 関数のメモ化ができるHooks
 * @説明3 useMemo : 関数を実行した結果をメモ化できるHooks
 */
const MemoPage: NextPage = () => {
  const sumFunction = (a: number, b: number) => {
    return a + b;
  };

  // メモ化の理解の前に「アドレス比較」を理解する
  // 以下に「Object」の場合と「Function」の場合の結果を示す
  const objA = { a: 1, b: 2, c: 3 };
  const objB = { a: 1, b: 2, c: 3 };

  console.log('Objectの比較は`false`になる', objA === objB);
  // expected output : false

  const funcA = () => {
    return 1;
  };
  const funcB = () => {
    return 1;
  };

  console.log('Functionの比較は`false`になる', funcA === funcB);
  // expected output : false

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
