import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import 'intersection-observer';

type LazyImageProps = {
  /** img要素と画面が交差した時に表示する画像のパス */
  src: string;
  /** 画像が読み込めなかったときに画面に表示する代替テキスト */
  alt: string;
  /** 画像の横幅 */
  width: string;
  /** 画像の縦幅 */
  height: string;
  /** 画像のデコード処理 */
  decoding: 'sync' | 'async' | 'auto';
  /** 画像の角丸 */
  borderRadius?: string;
  /** 画像のアスペクト比 */
  objectFit?: string;
  /** IntersectionObserverのオプション設定 */
  options?: IntersectionObserverInit;
} & JSX.IntrinsicElements['div'];

/**
 * LazyImage component
 * @param props {@link Props}
 */
export const LazyImage = forwardRef<HTMLDivElement, LazyImageProps>(
  ({ src, alt, width, height, decoding, borderRadius, objectFit, options, ...args }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const pictureRef = useRef<HTMLPictureElement>(null);

    // MEMO : スーパーリロードしたらエラーになる
    // const observer = useMemo(() => {
    //   return typeof window !== undefined
    //     ? new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //           if (!entry.isIntersecting) return;
    //           setIsVisible(entry.isIntersecting);
    //         });
    //       }, options)
    //     : null;
    // }, [options]);

    // useEffect(() => {
    //   if (pictureRef?.current === null) return;
    //   if (observer === null) return;
    //   observer.observe(pictureRef.current);
    //   return () => observer.disconnect();
    // }, [pictureRef, options, observer]);

    //! MEMO : 2つ目の実装方法。最適な実装方法
    useEffect(() => {
      if (pictureRef?.current === null) return;

      const pictureElement = pictureRef.current;

      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setIsVisible(entry.isIntersecting);
        });
      }, options);

      observer.observe(pictureElement);

      return () => observer.unobserve(pictureElement);
    }, [pictureRef, options]);

    //! MEMO : 3つ目の実装方法
    // let observer: IntersectionObserver;

    // useEffect(() => {
    //   if (pictureRef?.current === null) return;

    //   observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    //     entries.forEach((entry) => {
    //       if (!entry.isIntersecting) return;
    //       setIsVisible(entry.isIntersecting);
    //     });
    //   }, options);

    //   observer.observe(pictureRef.current);

    //   return () => {
    //     if (pictureRef?.current === null) return;
    //     observer.unobserve(pictureRef.current);
    //   };
    // }, [pictureRef, options]);

    /**
     * 画像が読み込まれた時にアニメーションを適用させるイベントハンドラ
     */
    const onImageLoad = (event: React.ChangeEvent<HTMLImageElement>): void => {
      event.target.classList.add('image-loaded');
    };

    return (
      <div ref={ref} {...args}>
        <StPicture ref={pictureRef} width={width} height={height}>
          {isVisible && (
            <StImage
              src={src}
              alt={alt}
              width={width}
              height={height}
              decoding={decoding}
              borderRadius={borderRadius}
              objectFit={objectFit}
              onLoad={onImageLoad}
            />
          )}
        </StPicture>
      </div>
    );
  },
);

LazyImage.displayName = 'LazyImage';

const loaded = keyframes`
  0% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1.0;
  }
  `;

const StPicture = styled.picture<Pick<LazyImageProps, 'width' | 'height'>>`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const StImage = styled.img<Omit<LazyImageProps, 'src' | 'alt'>>`
  display: block;
  /* 画面幅に応じて画像がリサイズされるように設定 */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius ?? '3px'};
  object-fit: ${({ objectFit }) => objectFit ?? 'cover'};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.image-loaded {
    animation: ${loaded} 0.8s ease-out;
  }
`;
