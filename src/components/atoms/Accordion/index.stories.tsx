import React, { useState, ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Accordion } from '.';

export default {
  title: 'atoms/Accordion',
  component: Accordion,
} as Meta;

type Props = ComponentProps<typeof Accordion>;

const Template: Story<Props> = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const handleClick1 = () => {
    setIsActive1((prev) => !prev);
  };

  const handleClick2 = () => {
    setIsActive2((prev) => !prev);
  };

  const handleClick3 = () => {
    setIsActive3((prev) => !prev);
  };

  const handleClick4 = () => {
    setIsActive4((prev) => !prev);
  };

  return (
    <>
      <Accordion
        title="Accordion1"
        mainInfo="Accordion1が表示されました"
        isActive={isActive1}
        onClick={handleClick1}
      />
      <Accordion
        title="Accordion2"
        mainInfo="Accordion2が表示されました"
        isActive={isActive2}
        onClick={handleClick2}
      />
      <Accordion
        title="Accordion3"
        mainInfo="Accordion3が表示されました"
        isActive={isActive3}
        onClick={handleClick3}
      />
      <Accordion
        title="Accordion4"
        mainInfo="Accordion4が表示されました"
        isActive={isActive4}
        onClick={handleClick4}
      />
    </>
  );
};

export const Basic = Template.bind({});
