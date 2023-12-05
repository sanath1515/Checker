import { StoryFn, Meta } from "@storybook/react";
import MuiDatePicker from ".";
import { DATE_PICKER } from "../../../utils/constants";

export default {
  title: "Molecules/DatePicker",
  component: MuiDatePicker,
  argTypes: {
    control: {
      label: {
        type: "text",
      },
    },
  },
} as Meta<typeof MuiDatePicker>;

const Template: StoryFn<typeof MuiDatePicker> = (args) => (
  <MuiDatePicker {...args} />
);
export const From = Template.bind({});
From.args = {
  label: DATE_PICKER.fromLabel,
  dateFormat: DATE_PICKER.dateFormate,
};

export const To = Template.bind({});
To.args = {
  label: DATE_PICKER.toLabel,
  dateFormat: DATE_PICKER.dateFormate,
};
