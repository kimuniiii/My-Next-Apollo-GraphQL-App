import { NextPage } from 'next';
import Link from 'next/link';
import { HeadTemplate } from 'src/components/templates/HeadTemplate';
import { ColorPalette } from 'src/styles/Color';
import styled from 'styled-components';

const TopPage: NextPage = () => {
  return (
    <>
      <HeadTemplate
        pageTitle='技術検証用トップページ'
        pageDescription='このページは技術検証用トップページです'
      />

      <StArticleTopFlexContainer>
        <h1>技術検証用トップページ</h1>

        <StSectionTopFlexContainer>
          <h2>JavaScript</h2>

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

          <Link href='/history' passHref>
            <StAnchorLink>HistoryAPIの検証ページへ遷移する</StAnchorLink>
          </Link>

          <Link href='/modal-animation' passHref>
            <StAnchorLink>Modal Animationの検証ページへ遷移する</StAnchorLink>
          </Link>

          <Link href='/event' passHref>
            <StAnchorLink>event の target と currentTarget の違い</StAnchorLink>
          </Link>
        </StSectionTopFlexContainer>
      </StArticleTopFlexContainer>
    </>
  );
};

export default TopPage;

const StArticleTopFlexContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

const StSectionTopFlexContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const StAnchorLink = styled.a`
  width: fit-content;
  color: ${ColorPalette.Blue100};
`;
