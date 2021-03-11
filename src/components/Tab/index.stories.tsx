import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tab } from '.';

export default {
  title: 'atoms/Tab',
  component: Tab,
} as Meta;

type Props = ComponentProps<typeof Tab>;

const Template: Story<Props> = (args) => {
  return <Tab {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  initialActiveContent: '国内',
  tabItem: [
    {
      id: '1',
      title: '国内',
      order: 'first',
      mainInfo: '国内へ行ってきます',
    },
    {
      id: '2',
      title: '海外',
      order: 'second',
      mainInfo: '海外へ行ってきます',
    },
    {
      id: '3',
      title: 'ホテル',
      order: 'third',
      mainInfo: 'ホテルへ行ってきます',
    },
    {
      id: '4',
      title: 'ビジネス',
      order: 'fourth',
      mainInfo: 'ビジネスを頑張ります',
    },
  ],
};
