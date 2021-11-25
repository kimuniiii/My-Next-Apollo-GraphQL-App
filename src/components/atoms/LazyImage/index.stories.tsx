import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LazyImage } from '.';

export default {
  title: 'atoms/LazyImage',
  component: LazyImage,
  parameters: {
    docs: {
      description: {
        component: 'InterSectionObserver API を用いた LazyImage Component',
      },
    },
  },
} as Meta;

type Props = ComponentProps<typeof LazyImage>;

const Template: Story<Props> = (args) => {
  return (
    <>
      {[...Array(500)].map((_, idx) => {
        return (
          <LazyImage
            {...args}
            key={idx}
            src={`https://picsum.photos/id/${idx}/160/160`}
            alt={`Alt Text ${idx}`}
          />
        );
      })}
    </>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  width: '160px',
  height: '160px',
  options: { threshold: 0.5 },
};
