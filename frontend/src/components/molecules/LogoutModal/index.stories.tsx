import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import LogoutModal from ".";

export default {
  title: "Molecules/Logout Modal",
  component: LogoutModal,
} as Meta;

const Template: StoryFn<typeof LogoutModal> = (args) => (
  <LogoutModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
