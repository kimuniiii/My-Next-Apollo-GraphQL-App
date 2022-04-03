import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { ChildComponent } from 'src/components/memo/ChildComponent';
import { MemoChildComponent } from 'src/components/memo/MemoChildComponent';

/**
 * @概要 React.memo と useCallback と useMemo の挙動を正しく理解するための Sample Page
 * @説明1 React.memo : コンポーネントのメモ化ができるHOC
 * @説明2 useCallback : 関数のメモ化ができるHooks
 * @説明3 useMemo : 関数を実行した結果をメモ化できるHooks
 */
const MemoPage: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>Reactのmemo化を検証するページ</title>
      </Head>

      <h1>React.memoに関して検証するページ</h1>

      <section>
        <h1>Propsで「プリミティブ値」だけを子供に送る場合</h1>

        <button onClick={() => setCount((prev) => prev + 1)}>Counter1</button>
        <button onClick={() => setCount((prev) => prev + 2)}>Counter2</button>

        <MemoChildComponent text='MemoChildComponent' />
        <ChildComponent text='ChildComponent' />
      </section>
    </>
  );
};

export default MemoPage;
