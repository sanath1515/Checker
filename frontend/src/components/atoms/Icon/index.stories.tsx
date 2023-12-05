import type { Meta, StoryObj } from "@storybook/react";
import MuiIcons from ".";
import Box from "../../../../public/assets/icons/Box.svg";
import Logs from "../../../../public/assets/icons/Logs.svg";

const meta = {
  title: "atoms/icon",
  component: MuiIcons,
  argTypes: {
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof MuiIcons>;

type Story = StoryObj<typeof meta>;

export const SearchIcon: Story = {
  args: {
    src: Box,
    height: " 24px",
    width: "24px",
    alt: "Box Icon",
  },
};

export const LogIcon: Story = {
  args: {
    src: Logs,
    height: " 24px",
    width: "24px",
    alt: "Log Icon",
  },
};

export default meta;
