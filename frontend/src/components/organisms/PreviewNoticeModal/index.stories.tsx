import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PreviewNoticeModal from ".";

export default {
  title: "organisms/PreviewNotice Modal",
  component: PreviewNoticeModal,
} as Meta;

const Template: StoryFn<typeof PreviewNoticeModal> = (args) => (
  <PreviewNoticeModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
