import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Skelton } from '.';

export default {
  title: 'atoms/Skelton',
  component: Skelton,
} as Meta;

type Props = ComponentProps<typeof Skelton>;

const Template: Story<Props> = (args) => <Skelton {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  width: '325px',
  height: '40px',
};
