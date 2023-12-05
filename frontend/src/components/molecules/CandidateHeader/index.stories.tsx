import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CandidateHeader from ".";

export default {
  title: "molecules/CandidateHeader",
  component: CandidateHeader,
  argTypes: {
    heading: {
      control: {
        type: "text",
      },
    }
  }
} as Meta;

const Template: StoryFn<typeof CandidateHeader> = (args) => <CandidateHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
 heading:"Candidates",
 hidden: false,
 
};