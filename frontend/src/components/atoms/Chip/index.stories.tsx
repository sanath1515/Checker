import { StoryFn } from "@storybook/react";
import React from "react";
import CustomChip from ".";
export default {
  title: "atoms/Chip",
  component: CustomChip,
  argtypes: {
    label: {
      control: "text",
    },
    styles: {
      control: "object",
    },
    sx: {
      control: "object",
    },
  },
};
const Template: StoryFn<typeof CustomChip> = (args) => <CustomChip {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  label: "CLEAR",
};

export const Consider = Template.bind({});
Consider.args = {
  label: "CONSIDER",
};

export const AdverseAction = Template.bind({});
AdverseAction.args = {
  label: "ADVERSE ACTION",
};
export const Engage = Template.bind({});
Engage.args = {
  label: "ENGAGE",
};

export const Scheduled = Template.bind({});
Scheduled.args = {
  label: "SCHEDULE",
};
