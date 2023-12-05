import { Meta, StoryFn } from "@storybook/react";
import { InputField } from ".";
export default {
  title: "atoms/InputField",
  component: InputField,
} as Meta;

const temp: StoryFn<typeof InputField> = (args) => <InputField {...args} />;

export const Text = temp.bind({});
Text.args = {
  placeholder: "John Cena",
  sx: { width: "356px", height: "48px" },
};

export const TextPassword = temp.bind({});
TextPassword.args = {
  placeholder: "Create a password",
  type: "password",
  sx: { width: "356px", height: "48px" },
};
