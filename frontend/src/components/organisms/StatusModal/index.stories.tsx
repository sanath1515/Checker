import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import StatusModal from ".";
import {
  DOWNLOAD_MESSAGE,
  OTP_MESSAGE,
  SUCCESS_MESSAGE,
} from "../../../utils/constants";

export default {
  title: "organisms/Status Modal",
  component: StatusModal,
} as Meta;

const Template: StoryFn<typeof StatusModal> = (args) => (
  <StatusModal {...args} />
);

export const SuccessStatus = Template.bind({});
SuccessStatus.args = {
  open: true,
  message: SUCCESS_MESSAGE,
};

export const OtpStatus = Template.bind({});
OtpStatus.args = {
  open: true,
  message: OTP_MESSAGE,
};

export const DownloadStatus = Template.bind({});
DownloadStatus.args = {
  open: true,
  message: DOWNLOAD_MESSAGE,
};
