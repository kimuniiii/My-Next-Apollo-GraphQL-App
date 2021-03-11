import React, { ComponentProps } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Meta, Story } from '@storybook/react/types-6-0';
import { IconPosition } from './';

export default {
  title: 'atoms/IconPosition',
  component: IconPosition,
} as Meta;

type Props = ComponentProps<typeof IconPosition>;

const Template: Story<Props> = () => {
  return (
    <IconPosition>
      <MdKeyboardArrowUp size={24} />
      <MdKeyboardArrowDown size={24} />
      <MdKeyboardArrowRight size={24} />
      <MdKeyboardArrowLeft size={24} />
    </IconPosition>
  );
};

export const Basic = Template.bind({});
