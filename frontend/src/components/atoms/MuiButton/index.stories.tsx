import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import MuiButton from ".";
import theme from "../../../theme";

export default {
  title: "Atoms/Button",
  component: MuiButton,
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    startIcon: {
      control: "text",
    },
    endIcon: {
      control: "text",
    },
    sx: {
      control: "object",
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<typeof MuiButton> = (args) => <MuiButton {...args} />;

export const PreAdverseAction = Template.bind({});
PreAdverseAction.args = {
  children: "Pre-Adverse Action",
  variant: "outlined",
  sx: {
    width: "inherit",
    height: "2.25rem",
    padding: "0.5rem 1rem",
    borderRadius: " 0.375rem",
    textTransform: "none",
    border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    background: theme.palette.textColor.white,
    gap: "0.25rem",
    color: theme.palette.textColor.mediumEmphasis,
    "&:hover": {
      background: "none",
      border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    },
  },
  disabled: false,
};

export const Engage = Template.bind({});
Engage.args = {
  children: "Engage",
  variant: "contained",
  sx: {
    width: "inherit",
    height: "2.25rem",
    padding: "0.5rem 1rem",
    borderRadius: " 0.375rem",
    textTransform: "none",
    background: theme.palette.primary.main,
    gap: "0.25rem",
    color: theme.palette.textColor.white,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  disabled: false,
};
