import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox } from '.';

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
} as Meta;

type CheckboxProps = ComponentProps<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  name: 'Checkbox',
  value: 'Checkbox',
  text: 'チェックしてください',
};
