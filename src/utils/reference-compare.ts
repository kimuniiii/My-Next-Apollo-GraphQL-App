import { useCallback, useMemo } from 'react';
import { shallowEqual } from './shallow-equal';

export const referenceCompare = () => {
  // メモ化の理解の前に「アドレス比較」を理解する
  // 以下に「Object」の場合と「Function」の場合の結果を示す
  const objA = { a: 1, b: 2, c: 3 };
  const objB = { a: 1, b: 2, c: 3 };

  console.log('Objectの比較は`false`になる', objA === objB);
  // expected output : false
  console.log('shallowEqual関数の結果は`true`になる', shallowEqual(objA, objB));
  // expected output : true

  const funcA = () => {
    return 1;
  };
  const funcB = () => {
    return 1;
  };

  console.log('Functionの比較は`true`になる', funcA === funcA);
  console.log('Functionの比較は`false`になる', funcA === funcB);

  const useCallbackFuncA = useCallback(() => {
    return 1;
  }, []);

  const useCallbackFuncB = useCallback(() => {
    return 1;
  }, []);

  console.log('useCallbackFunctionの比較は`true`になる', useCallbackFuncA === useCallbackFuncA);
  console.log('useCallbackFunctionの比較は`false`になる', useCallbackFuncA === useCallbackFuncB);

  const sumFunction = (a: number, b: number) => {
    return a + b;
  };

  const useMemoFunctionReturnValue = useMemo(() => {
    console.log('1回目は走る。2回目以降は走らない');
    return sumFunction(1, 2);
  }, []);

  console.log(useMemoFunctionReturnValue);

  return;
};
