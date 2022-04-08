import { forwardRef } from 'react';
import * as Styled from './style';
import { useInfinityCarousel } from './use-infinity-carousel';

const PADDING = 80;

export type InfinityCarouselProps = {
  /** カルーセル内に表示するアイテム */
  children: React.ReactElement[];
  /** カルーセルの幅 */
  containerWidth: number;
  /** 1アイテムのデフォルト幅 */
  minItemWidth: number;
};

export const InfinityCarousel = forwardRef<HTMLDivElement, InfinityCarouselProps>((props, ref) => {
  const { children, containerWidth, minItemWidth } = props;

  const dispItemCount = Math.floor((containerWidth - PADDING) / minItemWidth) || 1;

  const {
    items,
    xCoordinate,
    animationsEnabled,
    onClickPrevButton,
    onClickNextButton,
    onTransitionEnd,
  } = useInfinityCarousel({ dispItemCount, children });

  return (
    <Styled.DivWrapper ref={ref}>
      <Styled.BtnPrev
        type='button'
        aria-label='前へ'
        aria-controls='carousel-list'
        onClick={onClickPrevButton}
      >
        前へ
      </Styled.BtnPrev>

      <Styled.DivAnimationCarousel
        role='group'
        id='carousel-list'
        xCoordinate={xCoordinate}
        animationsEnabled={animationsEnabled}
        onTransitionEnd={onTransitionEnd}
      >
        {items.map((v, idx) => {
          return <Styled.DivItem key={idx}>{v}</Styled.DivItem>;
        })}
      </Styled.DivAnimationCarousel>

      <Styled.BtnNext
        type='button'
        aria-label='次へ'
        aria-controls='carousel-list'
        onClick={onClickNextButton}
      >
        次へ
      </Styled.BtnNext>
    </Styled.DivWrapper>
  );
});

InfinityCarousel.displayName = 'InfinityCarousel';
