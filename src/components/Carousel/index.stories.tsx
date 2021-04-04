import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Carousel } from '.';

export default {
  title: 'atoms/Carousel',
  component: Carousel,
} as Meta;

type Props = ComponentProps<typeof Carousel>;

const Template: Story<Props> = (args) => <Carousel {...args} />;

export const Basic = Template.bind({});

const colors = [
  '#f1c40f',
  '#f39c12',
  '#e74c3c',
  '#16a085',
  '#2980b9',
  '#8e44ad',
  '#2c3e50',
  '#95a5a6',
];

const colorsArray = colors.map((color) => (
  <div
    style={{
      width: '238px',
      height: '176px',
      background: color,
      borderRadius: '3px',
      opacity: 0.9,
    }}
    key={color}
  >
    {color}
  </div>
));

Basic.args = {
  children: colorsArray,
};
