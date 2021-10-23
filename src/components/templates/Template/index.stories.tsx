import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Template } from '.';

export default {
  title: 'organisms/Template',
  component: Template,
} as Meta;

type Props = ComponentProps<typeof Template>;

const StoryTemplate: Story<Props> = (args) => <Template {...args} />;

export const Basic = StoryTemplate.bind({});

Basic.args = {
  children: 'Component',
};
