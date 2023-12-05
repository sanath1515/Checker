import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PreAdverseNoticeCard from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "organisms/PreAdverseNotice Card ",
  component: PreAdverseNoticeCard,
} as Meta;

const Template: StoryFn<typeof PreAdverseNoticeCard> = (args) => (
  <MemoryRouter>
    <PreAdverseNoticeCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
