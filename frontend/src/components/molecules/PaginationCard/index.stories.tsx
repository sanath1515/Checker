import { StoryFn, Meta } from "@storybook/react";
import PaginationCard from ".";

export default {
  title: "Molecules/PaginationCard",
  component: PaginationCard,
} as Meta;

const Template: StoryFn<typeof PaginationCard> = (args) => (
  <PaginationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isFiltered: true,
  count: "04",
  width: "100%",
  height: "3.5rem",
};
