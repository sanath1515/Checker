import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dashboard from "../../../../public/assets/icons/Box.svg";
import Candidate from "../../../../public/assets/icons/Canditate.svg";
import TypograpyIcon from ".";
import theme from "../../../theme";
export default {
  title: "molecules/TypograpyIcon",
  component: TypograpyIcon,
} as Meta;
const Template: StoryFn<typeof TypograpyIcon> = (args) => (
  <TypograpyIcon {...args} />
);
export const Default = Template.bind({});
Default.args = {
  typographyProps: {
    typoVariant: "body1",
    children: "Home",
    color: theme.palette.textColor.highEmphasis,
  },
  iconSrc: Dashboard,
  iconAlt: "Dashboard",
  height: "44px",
  width: "206px",
  iconOnClick: () => {
    console.log("hello world");
  },
};

export const Candidates = Template.bind({});
Candidates.args = {
  typographyProps: {
    typoVariant: "body1",
    children: "Candidate",
    color: theme.palette.primary[500],
  },
  iconSrc: Candidate,
  iconAlt: "Candidate",
  height: "44px",
  width: "206px",
  backgroundColor: theme.palette.primary[300],
  iconOnClick: () => {
    console.log("hello world");
  },
};
