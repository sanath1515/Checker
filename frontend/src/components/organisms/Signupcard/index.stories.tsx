import { StoryFn, Meta } from "@storybook/react";
import SignupCard, { SignUpProps } from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/Signup",
  component: SignupCard,
} as Meta;

const Template: StoryFn<SignUpProps> = (args) => (
  <MemoryRouter>
    <SignupCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  handleSignUp: (email, password) => {
    console.log("Email:", email);
    console.log("Password:", password);
  },
};
