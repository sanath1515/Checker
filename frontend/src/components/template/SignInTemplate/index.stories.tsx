import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SignInCard from "../../organisms/SignInCard";
import SignInTemplate from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Template/SignInTemplate",
  component: SignInTemplate,
} as Meta;

const Template: StoryFn = (args) => <SignInTemplate {...args} />;

export const Default = Template.bind({});

export const SignInPage = Template.bind({});
SignInPage.args = {
  rightComponent: (
    <MemoryRouter>
      <SignInCard handleSignIn={() => {}} />
    </MemoryRouter>
  ),
};
