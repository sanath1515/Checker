import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomTableRow, { TableRowProps } from ".";
import theme from "../../../theme";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Molecules/CustomTableRow",
  component: CustomTableRow,
  argTypes: {},
} as Meta;

const Template: StoryFn<TableRowProps> = (args) => (
  <MemoryRouter>
    <CustomTableRow {...args} />
  </MemoryRouter>
);

export const CandidateTable = Template.bind({});
CandidateTable.args = {
  candidatename: "John Doe",
  adjudication: "-",
  status: "CLEAR",
  location: "Sukamanah",
  date: "2023-09-07",
  cellwidth: theme.spacing(264),
};

export const CourtSearches = Template.bind({});
CourtSearches.args = {
  searchName: "SSN Verification",
  status: "CONSIDER",
  date: "7/2/2022",
  cellwidth: theme.spacing(70),
};
