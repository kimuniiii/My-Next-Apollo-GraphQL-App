import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ColorPalette } from 'src/styles/Color';
import styled from 'styled-components';

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>技術検証用トップページ</title>
      </Head>

      <StSectionTopFlexContainer>
        <h1>技術検証用トップページ</h1>

        <Link href='/lazy-image' passHref>
          <StAnchorLink>LazyImageの検証ページへ遷移する</StAnchorLink>
        </Link>

        <Link href='/memo' passHref>
          <StAnchorLink>Reactのメモ化の検証ページへ遷移する</StAnchorLink>
        </Link>

        <Link href='/recoil' passHref>
          <StAnchorLink>Recoilの検証ページへ遷移する</StAnchorLink>
        </Link>

        <Link href='/virtual-scroll' passHref>
          <StAnchorLink>仮想スクロールの検証ページへ遷移する</StAnchorLink>
        </Link>

        <Link href='/carousel' passHref>
          <StAnchorLink>InfinityCarouselの検証ページへ遷移する</StAnchorLink>
        </Link>

        <Link href='/url-copy' passHref>
          <StAnchorLink>URLコピーの検証ページへ遷移する</StAnchorLink>
        </Link>
      </StSectionTopFlexContainer>
    </>
  );
};

export default TopPage;

const StSectionTopFlexContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StAnchorLink = styled.a`
  width: fit-content;
  color: ${ColorPalette.Blue100};
`;
