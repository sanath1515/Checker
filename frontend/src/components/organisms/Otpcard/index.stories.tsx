import { StoryFn, Meta } from "@storybook/react";
import OTPCard, { OTPModelProps } from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/OtpCard",
  component: OTPCard,
} as Meta;

const Template: StoryFn<OTPModelProps> = (args) => (
  <MemoryRouter>
    <OTPCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
