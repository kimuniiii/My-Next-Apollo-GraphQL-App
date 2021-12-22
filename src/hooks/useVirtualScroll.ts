import { useCallback, useMemo, useState } from 'react';

// 余白が発生しないように画面外に余分にアイテムを表示しておく
const EXTRA_ITEM_COUNT = 3;

type Args = {
  containerHeight: number;
  itemHeight: number;
  items: number[];
};

type ReturnItems = {
  startIndex: number;
  handleScroll: React.UIEventHandler<HTMLDivElement>;
  displayingItems: number[];
};

/**
 * @概要 レンダリングするリストアイテムを制御する`Custom Hooks`
 * @役割1 先頭に表示するリストアイテムのIndexの状態管理
 * @役割2 表示するリストアイテムを計算するスクロールイベントハンドラーを返却する
 * @役割3 表示するべきリストを返却する
 */
export const useVirtualScroll = ({ containerHeight, itemHeight, items }: Args): ReturnItems => {
  const [startIndex, setStartIndex] = useState(0);
  const maxDisplayCount = Math.floor(containerHeight / itemHeight + EXTRA_ITEM_COUNT);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const { scrollTop } = e.currentTarget;
      const nextStartIndex = Math.floor(scrollTop / itemHeight);
      setStartIndex(nextStartIndex);
    },
    [itemHeight],
  );

  const displayingItems = useMemo(() => items.slice(startIndex, startIndex + maxDisplayCount), [
    startIndex,
    maxDisplayCount,
  ]);

  return { handleScroll, displayingItems, startIndex };
};
