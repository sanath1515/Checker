import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import LandingPageTemplate from ".";
import NavBar from "../../organisms/NavBar";
import MuiTypography from "../../atoms/MuiTypography";
import PreAdverseNoticeCard from "../../organisms/PreAdverseNoticeCard";
import { previewNoticeModalTitle } from "../../../utils/constants";
import { MemoryRouter } from "react-router-dom";
import { NavbarProvider } from "../../../utils/navbarContext";

export default {
  title: "Template/LandingPage Template",
  component: LandingPageTemplate,
} as Meta;

const Template: StoryFn = (args) => (
  <MemoryRouter>
    <NavbarProvider>
      <LandingPageTemplate {...args} />
    </NavbarProvider>
  </MemoryRouter>
);

export const Default = Template.bind({});

export const SamplePage = Template.bind({});
SamplePage.args = {
  header: (
    <MuiTypography children={previewNoticeModalTitle} typoVariant="subtitle1" />
  ),
  content: <PreAdverseNoticeCard width="100%" />,
};
