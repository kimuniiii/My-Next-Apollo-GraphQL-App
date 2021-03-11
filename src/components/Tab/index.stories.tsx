import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tab } from './';

export default {
  title: 'atoms/Tab',
  component: Tab,
} as Meta;

type ButtonProps = React.ComponentProps<typeof Tab>;

const Content = () => <div>うんこ</div>;

const Template: Story<ButtonProps> = () => (
  <Tab title="タブ" content={[<Content />]} />
);

export const Basic = Template.bind({});
