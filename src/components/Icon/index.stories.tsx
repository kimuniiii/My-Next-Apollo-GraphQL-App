import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Icon } from './';

export default {
  title: 'atoms/Icon',
  component: Icon,
} as Meta;

type CheckboxProps = React.ComponentProps<typeof Icon>;

const Template: Story<CheckboxProps> = (args) => {
  return <Icon {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  name: 'Icon',
};
