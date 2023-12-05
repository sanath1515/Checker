import { StoryFn, Meta } from "@storybook/react";
import Accordian from ".";
import { CandidateData, Report_Data } from "../../../utils/data";
export default {
    title: "Organisms/Accordian",
    component: Accordian
} as Meta;

const Template: StoryFn<typeof Accordian> = (args) => <Accordian {...args} />;

export const Default = Template.bind({});
Default.args={
  title:"Candidate Information",
  cardData:CandidateData,
}

export const reportInfoCard = Template.bind({});
reportInfoCard.args={
  title:"Report Information",
  cardData: Report_Data,
}