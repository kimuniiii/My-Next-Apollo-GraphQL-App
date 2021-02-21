import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { Checkbox } from "./";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  name: "Checkbox",
  value: "Checkbox",
  label: "Checkbox",
};
