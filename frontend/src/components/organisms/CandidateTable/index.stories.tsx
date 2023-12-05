import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { TableData, candidateTableHeaders } from "../../../mocks/mock";
import CandidateTable from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/CandidateTable",
  component: CandidateTable,
} as Meta;

const Template: StoryFn<typeof CandidateTable> = (args) => (
  <MemoryRouter>
    <CandidateTable {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  candidateTableHeaders: candidateTableHeaders,
  TableData: TableData,
};
