import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import avatar_image from "../../../../public/assets/images/avatar_image.svg";
import CustomAvatar from ".";
export default {
  title: "atoms/Avatar",
  component: CustomAvatar,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    sx: { control: "object" },
  },
} as Meta;
const Template: StoryFn<typeof CustomAvatar> = (args) => (
  <CustomAvatar {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  src: avatar_image,
  alt: "profile image",
};
export const smallAvatar = Template.bind({});
smallAvatar.args = {
  src: avatar_image,
  alt: "profile image",
  sx: { width: 24, height: 24 },
};

export const largeAvatar = Template.bind({});
largeAvatar.args = {
  src: avatar_image,
  alt: "profile image",
  sx: { width: 56, height: 56 },
};
