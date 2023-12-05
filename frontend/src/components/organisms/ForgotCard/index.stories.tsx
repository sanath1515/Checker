import { StoryFn, Meta } from "@storybook/react";
import ForgotCard, { ForgetPasswordCardProps } from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/ForgotCard",
  component: ForgotCard,
} as Meta;

const Template: StoryFn<ForgetPasswordCardProps> = (args) => (
  <MemoryRouter>
    <ForgotCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  handleForgot: (email) => {
    console.log("Email:", email);
  },
};
