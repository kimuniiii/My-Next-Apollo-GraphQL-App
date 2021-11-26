import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CommonTemplate } from '.';

export default {
  title: 'organisms/Template',
  component: CommonTemplate,
} as Meta;

type Props = ComponentProps<typeof CommonTemplate>;

const StoryTemplate: Story<Props> = (args) => <CommonTemplate {...args} />;

export const Basic = StoryTemplate.bind({});

Basic.args = {
  children: 'Component',
};
