import { StoryFn, Meta } from "@storybook/react";
import ReportModal from ".";


export default {
  title: "Organisms/ReportModal",
  component: ReportModal,
  
} as Meta;

const Template: StoryFn<typeof ReportModal> = (args) => <ReportModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open:true,

};
