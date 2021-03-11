import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput } from './';

export default {
  title: 'atoms/TextInput',
  component: TextInput,
} as Meta;

type ButtonProps = React.ComponentProps<typeof TextInput>;

const Template: Story<ButtonProps> = (args) => <TextInput {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  name: '項目を入力してください',
  placeholder: '項目を入力してください',
};
