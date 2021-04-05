import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LazyImage } from './';

export default {
  title: 'atoms/LazyImage',
  component: LazyImage,
} as Meta;

type Props = ComponentProps<typeof LazyImage>;

const Template: Story<Props> = () => {
  return (
    <>
      <LazyImage
        src="/images/sample01.jpeg"
        alt="sample01"
        width={100}
        height={100}
      />
      <LazyImage
        src="/images/sample02.jpeg"
        alt="sample02"
        width={100}
        height={100}
      />
      <LazyImage
        src="/images/sample03.jpeg"
        alt="sample03"
        width={100}
        height={100}
      />
    </>
  );
};

export const Basic = Template.bind({});
