import { StoryFn, Meta } from "@storybook/react";
import UserCard from ".";
import user from "../../../../public/assets/icons/user.svg"


export default {
  title: "molecules/UserCard",
  component: UserCard,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    subTitle: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof UserCard> = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Name",
  subTitle: "John Smith",
  icon: user,
};
