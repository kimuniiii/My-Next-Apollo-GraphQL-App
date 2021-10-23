import { NextPage } from 'next';
import Head from 'next/head';

import { LazyImage } from 'src/components/atoms/LazyImage';
import { Template } from 'src/components/templates/Template';

const ImagePracticeComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>画像最適化検証ページ</title>
      </Head>
      <Template>
        <LazyImage src='/images/sample01.jpeg' alt='sample01' width={100} height={100} />
        <LazyImage src='/images/sample02.jpeg' alt='sample02' width={100} height={100} />
        <LazyImage src='/images/sample03.jpeg' alt='sample03' width={100} height={100} />
      </Template>
    </>
  );
};

export default ImagePracticeComponent;
