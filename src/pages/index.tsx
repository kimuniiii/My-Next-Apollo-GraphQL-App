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

      <StDivTopFlexContainer>
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
      </StDivTopFlexContainer>
    </>
  );
};

export default TopPage;

const StDivTopFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StAnchorLink = styled.a`
  color: ${ColorPalette.Blue100};
`;
