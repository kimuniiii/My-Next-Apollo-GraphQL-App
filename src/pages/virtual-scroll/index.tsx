import { NextPage } from 'next';
import Head from 'next/head';
import { useVirtualScroll } from 'src/hooks/useVirtualScroll';

/**
 * @概要 仮想スクロールを理解するためのサンプルページ
 * @説明1 1階層目のdivはスクロールさせるための要素（見える範囲を指定するためのmain）
 * @説明2 2階層目のdivは事前に計算したリスト全体の高さを持っておく（スクロールする高さを指定するためのdiv）
 * @説明3 3階層目のulがリスト要素です。この要素の配置を移動させることで、仮想スクロールを実現する（ListItemを置くUnOrderedList）
 * @説明4 4階層目のliがリストアイテム要素です。
 * @参考文献 https://zenn.dev/so_nishimura/articles/6a934ad066bedf
 */
const VirtualScrollPage: NextPage = () => {
  const itemHeight = 50;
  const containerHeight = 500;
  const containerWidth = 500;

  const arrayData = [...Array(100)].map((_, idx) => {
    return idx;
  });

  const { displayingItems, handleScroll, startIndex } = useVirtualScroll({
    containerHeight,
    itemHeight,
    items: arrayData,
  });

  return (
    <>
      <Head>
        <title>仮想スクロールサンプルページ</title>
      </Head>
      <h1>仮想スクロールサンプルページ</h1>
      {/** 見える範囲を指定するためのmain */}
      <main
        onScroll={handleScroll}
        style={{
          width: containerWidth,
          height: containerHeight,
          overflowY: 'scroll',
          border: '1px solid gray',
          position: 'relative',
        }}
      >
        {/** スクロールする高さを指定するためのdiv */}
        <div
          style={{
            height: arrayData.length * itemHeight,
            position: 'absolute',
            top: startIndex * itemHeight,
            left: '50%',
          }}
        >
          {/** ListItemを置くUnOrderedList */}
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
            }}
          >
            {displayingItems.map((item) => (
              <li
                key={item}
                style={{
                  height: itemHeight,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default VirtualScrollPage;
