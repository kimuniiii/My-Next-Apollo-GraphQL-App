import React, { FC, useState } from 'react';
import styled from 'styled-components';

type ActiveTab = 'first' | 'second' | 'third' | 'fourth';

type TabItem = {
  id: string;
  title: string;
  order: ActiveTab;
  mainInfo: string;
};

type Props = {
  initialActiveContent: string;
  tabItem: TabItem[];
};

export const Tab: FC<Props> = ({ initialActiveContent, tabItem }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('first');
  const [pcActiveContent, setPcActiveContent] = useState<string>(
    initialActiveContent
  );

  const handleClick = (clickTab: ActiveTab, content: string) => {
    setActiveTab(clickTab);
    setPcActiveContent(content);
  };

  return (
    <StTabRoot>
      {tabItem !== undefined && (
        <StTabWrapper>
          <StTabContainer>
            {tabItem.map(({ id, title, order, mainInfo }) => {
              return (
                <StTabList
                  role="tablist"
                  key={id}
                  isActive={activeTab === order}
                  onClick={() => handleClick(order, mainInfo)}
                >
                  <StTabListTitle role="tab">{title}</StTabListTitle>
                </StTabList>
              );
            })}
          </StTabContainer>
          {pcActiveContent !== '' && (
            <StTabContent role="tabpanel">{pcActiveContent}</StTabContent>
          )}
        </StTabWrapper>
      )}
    </StTabRoot>
  );
};

const StTabRoot = styled.div`
  padding: 0 16px;
`;

const StTabWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 2px solid #1c5db5;
`;

const StTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 1.5;
`;

const StTabList = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  font-size: 20px;
  width: 25%;
  height: 36px;
  color: ${({ isActive }) => (isActive ? '#222222' : '#fff')};
  background-color: ${({ isActive }) => (isActive ? '#fff' : '#1c5db5')};
  border-bottom: ${({ isActive }) => isActive && '#fff'};

  &:hover {
    opacity: 0.9;
  }
`;

const StTabListTitle = styled.div`
  text-align: center;
`;

const StTabContent = styled.div`
  color: #222222;
  width: 100%;
  padding: 8px 0 8px 16px;
`;
