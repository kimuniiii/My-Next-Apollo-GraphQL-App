import { NextPage } from 'next';
// import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { LazyImage } from 'src/components/atoms/LazyImage';
import { CommonTemplate } from 'src/components/templates/CommonTemplate';
import { HeadTemplate } from 'src/components/templates/HeadTemplate';

const ImagePracticeComponent: NextPage = () => {
  return (
    <>
      <HeadTemplate
        pageTitle='画像最適化検証ページ'
        pageDescription='画像の最適化の検証を行うための動作確認ページです'
      />
      <CommonTemplate>
        <StFlexColumn>
          <h1>通常のimgタグ</h1>
          <StImageContainer>
            <img
              src='https://picsum.photos/id/200/200/200'
              alt='Alt Text 200'
              width='200px'
              height='200px'
            />
            <img
              src='https://picsum.photos/id/201/200/200'
              alt='Alt Text 201'
              width='200px'
              height='200px'
            />
            <img
              src='https://picsum.photos/id/202/200/200'
              alt='Alt Text 202'
              width='200px'
              height='200px'
            />
          </StImageContainer>
        </StFlexColumn>

        <StFlexColumn>
          <h1>Next.js Imageコンポーネント</h1>
          <StImageContainer>
            {/* <Image
              src='https://picsum.photos/id/203/200/200'
              alt='Alt Text 203'
              width='200px'
              height='200px'
            />
            <Image
              src='https://picsum.photos/id/204/200/200'
              alt='Alt Text 204'
              width='200px'
              height='200px'
            />
            <Image
              src='https://picsum.photos/id/206/200/200'
              alt='Alt Text 206'
              width='200px'
              height='200px'
            /> */}
          </StImageContainer>
        </StFlexColumn>

        <StFlexColumn>
          <h1>LazyImageコンポーネント</h1>
          <StImageContainer>
            {[...Array(500)].map((_, idx) => {
              return (
                <LazyImage
                  key={idx}
                  src={`https://picsum.photos/id/${idx}/200/200`}
                  alt={`Alt Text ${idx}`}
                  width='200px'
                  height='200px'
                  decoding='async'
                  options={{ rootMargin: '300px' }}
                />
              );
            })}
          </StImageContainer>
        </StFlexColumn>
      </CommonTemplate>
    </>
  );
};

export default ImagePracticeComponent;

const StFlexColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StImageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;
`;
