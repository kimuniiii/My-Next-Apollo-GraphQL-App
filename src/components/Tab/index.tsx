import React, { useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  content: JSX.Element[];
};

export const Tab: React.FC<Props> = ({ title, content }) => {
  console.log({ title, content });
  const randomStr = () => Math.random().toString(16).substring(2);
  console.log(randomStr());
  const randomId: { current: string[] } = useRef(['']);
  console.log(randomId);
  const renderCount: { current: number } = useRef(0);
  console.log(renderCount);
  const [tabState, setTabState] = useState(randomId.current[0]);
  console.log({ tabState, setTabState });

  return (
    <TabContainer>
      <div className="tab">
        <ul className="tablist" role="tablist">
          {/* TODO map関数で回してレンダリングする */}
          <li role="presentation">
            <a href="#tab1" aria-controls="tab1" aria-selected="true">
              タブ1
            </a>
          </li>
          <li role="presentation">
            <a href="#tab2" aria-controls="tab2" aria-selected="false">
              タブ2
            </a>
          </li>
          <li role="presentation">
            <a href="#tab3" aria-controls="tab3" aria-selected="false">
              タブ3
            </a>
          </li>
        </ul>
        <div className="tabpanel">
          {/* TODO map関数で回してレンダリングする */}
          <div id="tab1">
            <p>タブ1のコンテンツ</p>
          </div>
          <div id="tab2">
            <p>タブ2のコンテンツ</p>
          </div>
          <div id="tab3">
            <p>タブ3のコンテンツ</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
};

const TabContainer = styled.div``;
