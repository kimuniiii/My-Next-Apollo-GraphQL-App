import type { NextPage } from 'next';
import Head from 'next/head';

const TopPage: NextPage = () => {
  const handleClick = () => {
    const currentUrl = location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('URLをコピーしました');
    });
  };

  return (
    <>
      <Head>
        <title>Next.js練習用トップページ</title>
      </Head>

      <button type='button' name='CopyButton' onClick={handleClick}>
        URLをコピーするボタン
      </button>
    </>
  );
};

export default TopPage;
