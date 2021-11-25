import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Skeleton } from '.';

export default {
  title: 'atoms/Skeleton',
  component: Skeleton,
} as Meta;

type Props = ComponentProps<typeof Skeleton>;

const Template: Story<Props> = (args) => <Skeleton {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  width: '325px',
  height: '40px',
};
