import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import AdverseActionsTable from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/AdverseActionsTable",
  component: AdverseActionsTable,
} as Meta;

const Template: StoryFn = (args) => (
  <MemoryRouter>
    <AdverseActionsTable {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
