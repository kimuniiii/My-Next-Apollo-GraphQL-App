import React, { FC, useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const LazyImage: FC<Props> = ({ className, src, alt, width, height }) => {
  const imageRef = useRef<HTMLImageElement>(null!);
  const [imageSrc, setImageSrc] = useState('');

  let observer: IntersectionObserver;

  useEffect(() => {
    if (imageRef && imageSrc !== src) {
      observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          // 画像が画面内に入ってきたらpropsで渡したsrc属性に更新をかける
          if (entry.intersectionRatio > 0 && entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(imageRef.current);
          }
        });
      });
      // 交差を監視したい要素を「observe」する
      observer.observe(imageRef.current);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src, imageRef]);

  /**
   * 画像が読み込まれた時にアニメーションを適用させるイベントハンドラ
   */
  const onImageLoad = (event: React.ChangeEvent<HTMLImageElement>): void => {
    event.target.classList.add('image-loaded');
  };

  return (
    <StImage
      className={className}
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      onLoad={onImageLoad}
    />
  );
};

const loaded = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`;

const StImage = styled.img`
  // 画面幅に応じて画像がリサイズされるように設定
  // 画像のレスポンシブ対応のお決まりのパターン
  width: 100%;
  height: auto;
  /* ホバーをなめらかにするため */
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &.image-loaded {
    animation: ${loaded} 1s ease-out;
  }
`;
