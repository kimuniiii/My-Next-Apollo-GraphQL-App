import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { LazyImage } from 'src/components/atoms/LazyImage';
import { Template } from 'src/components/templates/Template';

const ImagePracticeComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>画像最適化検証ページ</title>
      </Head>
      <Template>
        {[...Array(100)].map((_, idx) => {
          return testData.map((cur) => {
            return <LazyImage src={cur.src} alt='sample01' width={100} height={100} />;
          });
        })}
      </Template>
    </>
  );
};

export default ImagePracticeComponent;

const testData = [{ src: '/images/sample01.jpeg' }];
