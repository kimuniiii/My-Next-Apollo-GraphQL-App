import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

const TRANSITION = 100;
const MAX_WIDTH_PERCENT = 100;

export const useInfinityCarousel = ({
  children,
  dispItemCount,
}: {
  children: ReactElement[];
  dispItemCount: number;
}) => {
  const [items, setItems] = useState<ReactElement[]>(children);
  const [xCoordinate, setXCoordinate] = useState(-TRANSITION);
  const [whichButton, setWhichButton] = useState('');
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const oneItemWidthPercent = MAX_WIDTH_PERCENT / dispItemCount;

  useEffect(() => {
    // MEMO:[1,2,3,4,5,6,7,8,9] => [7,8,9,1,2,3,4,5,6]
    setItems((prev) => increaseItems(prev));
  }, []);

  useEffect(() => {
    setItems(increaseItems(children));
  }, [children]);

  useEffect(() => {
    setXCoordinate(-TRANSITION);
    setItems(increaseItems(children));
  }, [dispItemCount]);

  /**
   * dispItemCount * 3（prev, current, next）の数値を超えない数までコンテンツを増やす処理
   */
  const increaseItems = <T>(arr: T[]) => {
    const domMaxLength = dispItemCount * 3;
    const result = [...arr];
    const copyCount = Math.ceil(domMaxLength / result.length);

    return prevSort([...new Array(copyCount)].reduce<T[]>((acc) => [...acc, ...result], []));
  };

  /**
   * 先頭にあったコンテンツを末尾に移動させる処理
   */
  const nextSort = <T>(arr: T[]) => {
    const result = [...arr];
    const pick = result.slice(0, dispItemCount);
    result.splice(0, dispItemCount);
    result.push(...pick);
    return result;
  };

  /**
   * 末尾にあったコンテンツを末尾に移動させる処理
   */
  const prevSort = <T>(arr: T[]) => {
    const result = [...arr];
    const pick = result.slice(-dispItemCount);
    result.splice(result.length - dispItemCount, dispItemCount);
    result.unshift(...pick);
    return result;
  };

  const onClickPrevButton = () => {
    if (animationsEnabled) return; // アニメーション完了前のbutton連打防止
    setAnimationsEnabled(true);
    setXCoordinate((prev) => prev + TRANSITION);
    setWhichButton('prev');
  };

  const onClickNextButton = () => {
    if (animationsEnabled) return; // アニメーション完了前のbutton連打防止
    setAnimationsEnabled(true);
    setXCoordinate((prev) => {
      return prev - oneItemWidthPercent * dispItemCount;
    });
    setWhichButton('next');
  };

  const onTransitionEnd = () => {
    setAnimationsEnabled(false);
    if (whichButton === 'next') {
      // MEMO:順番を入れ替えた分x軸を進ませる
      setXCoordinate((prev) => prev + TRANSITION);
      // MEMO:[7,8,9,1,2,3,4,5,6] => [1,2,3,4,5,6,7,8,9]
      setItems((prev) => {
        return nextSort(prev);
      });
    }
    if (whichButton === 'prev') {
      // MEMO:順番を入れ替えた分x軸を戻す
      setXCoordinate((prev) => prev - TRANSITION);
      // MEMO:[7,8,9,1,2,3,4,5,6] => [4,5,6,7,8,9,1,2,3]
      setItems((prev) => {
        return prevSort(prev);
      });
    }
  };

  return {
    animationsEnabled,
    items,
    nextSort,
    onClickNextButton,
    onClickPrevButton,
    onTransitionEnd,
    prevSort,
    xCoordinate,
  };
};
