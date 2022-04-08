import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { InfinityCarousel } from 'src/components/atoms/InfinityCarousel';
import { runningInBrowser } from 'src/constants/browser';

const TopPage: NextPage = () => {
  const [containerWidth, setContainerWidth] = useState(runningInBrowser ? window.innerWidth : 0);
  const containerRef = useRef<HTMLDivElement>(null);

  const height = runningInBrowser ? window.innerHeight : 0;

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        for (const entry of entries) {
          console.log(entry);
          setContainerWidth(entry.contentRect.width);
        }
      });
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Carousel</title>
      </Head>

      <div ref={containerRef}>
        <InfinityCarousel containerWidth={containerWidth} minItemWidth={600}>
          {[...Array(10)].map((_, idx) => {
            return (
              <div
                style={{
                  width: 678,
                  maxWidth: 678,
                  height: height,
                  background: 'red',
                }}
                key={idx}
              >
                Div{idx}
              </div>
            );
          })}
        </InfinityCarousel>
      </div>
    </>
  );
};

export default TopPage;
