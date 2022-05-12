import { useState, useEffect } from 'react';

export type useFadeReturnType = {
  display: boolean;
};

/** アンマウント時にアニメーションを付与するために使用する */
export const useFade = (isVisible: boolean): useFadeReturnType => {
  const [display, setDisplay] = useState(isVisible);

  useEffect(() => {
    /** Dialog表示時の処理 */
    if (isVisible) {
      setDisplay(isVisible);
      return;
    }

    /** Dialog非表示時の処理、アニメーション実行後dom破棄 */
    const timer = setTimeout(() => setDisplay(isVisible), 300);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return {
    display,
  };
};
