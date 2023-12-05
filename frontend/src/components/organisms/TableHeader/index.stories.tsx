import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TableHeader from ".";

export default {
  title: "organisms/ Table Header",
  component: TableHeader,
} as Meta;

const Template: StoryFn<typeof TableHeader> = (args) => (
  <TableHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: "100%",
  height: "60px",
  needMoreIcon: true,
};
