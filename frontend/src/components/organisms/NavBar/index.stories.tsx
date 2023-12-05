import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NavBar from ".";
import { NavbarProvider } from "../../../utils/navbarContext";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/NavBar",
  component: NavBar,
} as Meta;

const Template: StoryFn = (args) => (
  <NavbarProvider>
    <MemoryRouter>
      <NavBar {...args} />
    </MemoryRouter>
  </NavbarProvider>
);

export const Default = Template.bind({});
Default.args = {};
