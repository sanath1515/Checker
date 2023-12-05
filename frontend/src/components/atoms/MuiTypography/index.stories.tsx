import { StoryFn, Meta } from "@storybook/react";
import MuiTypography from ".";
import theme from "../../../theme";

export default {
  title: "Atoms/Typography",
  component: MuiTypography,
} as Meta;

const Template: StoryFn<typeof MuiTypography> = (args) => (
  <MuiTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Candidates",
  typoVariant: "h1",
  color: theme.palette.textColor.highEmphasis,
};
