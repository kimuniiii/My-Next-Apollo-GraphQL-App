import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import { LazyImage } from 'src/components/atoms/LazyImage';
import { Template } from 'src/components/templates/Template';

const ImagePracticeComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>画像最適化検証ページ</title>
      </Head>
      <Template>
        <StImageContainer>
          {[...Array(500)].map((_, idx) => {
            return (
              <LazyImage
                key={idx}
                src={`https://picsum.photos/id/${idx}/160/160`}
                alt={`Alt Text ${idx}`}
                width='400px'
                height='400px'
                options={{ rootMargin: '300px' }}
              />
            );
          })}
        </StImageContainer>
      </Template>
    </>
  );
};

export default ImagePracticeComponent;

const StImageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;
`;
