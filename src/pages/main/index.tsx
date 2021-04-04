import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <StHomeRoot>
      <StFirstSection>section1</StFirstSection>
      <StSecondSection>section2</StSecondSection>
      <StThirdSection>section3</StThirdSection>
    </StHomeRoot>
  );
};

export default Home;

const StHomeRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StFirstSection = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 675px;
  background-color: #2e80ff;
  opacity: 0.9;
`;

const StSecondSection = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 675px;
  background-color: #222222;
  opacity: 0.9;
`;

const StThirdSection = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 675px;
  background-color: #ffd91a;
  opacity: 0.9;
`;
