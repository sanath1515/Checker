import { StoryFn, Meta } from "@storybook/react";
import SignInCard, { LoginProps } from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/SignIn",
  component: SignInCard,
} as Meta;

const Template: StoryFn<LoginProps> = (args) => (
  <MemoryRouter>
    <SignInCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  handleSignIn: (email, password) => {
    console.log("Email:", email);
    console.log("Password:", password);
  },
};
