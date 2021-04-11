import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Template } from 'src/components/organisms/Template';

const PostLink: NextPage = () => {
  return (
    <>
      <Head>
        <title>投稿リストページ</title>
      </Head>
      <Template>
        <StPostLinkRoot>
          <StTitle>投稿リストページ</StTitle>
          {linkData.map(({ title }) => (
            <Link
              as={`posts/detail/${title}`}
              href={`/posts/detail?title=${title}`}
            >
              <a style={{ paddingBottom: '16px' }}>{title}</a>
            </Link>
          ))}
        </StPostLinkRoot>
      </Template>
    </>
  );
};

export default PostLink;

const linkData = [
  { title: 'Title1' },
  { title: 'Title2' },
  { title: 'Title3' },
];

const StPostLinkRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;
