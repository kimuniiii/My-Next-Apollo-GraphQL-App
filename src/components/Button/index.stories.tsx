import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "./";

export default {
  title: "Button",
  component: Button,
} as Meta;

type ButtonProps = React.ComponentProps<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  text: "Button",
  isDisabled: false,
};
