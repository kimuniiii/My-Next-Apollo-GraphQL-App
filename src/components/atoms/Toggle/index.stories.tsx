import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Toggle } from '.';

export default {
  title: 'atoms/Toggle',
  component: Toggle,
} as Meta;

type Props = ComponentProps<typeof Toggle>;

const Template: Story<Props> = () => <Toggle />;

export const Basic = Template.bind({});
