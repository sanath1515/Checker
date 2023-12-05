import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from './index';

export default {
  title: 'atoms/checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean', 
    },
    onChange: {
      action: 'changed',
    },
    sx: {
      control: { type: 'object' },
    },
    style: {
      control: { type: 'object' },
    },
  },
} as Meta;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;


export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  label: 'Check me',
};

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  label: 'Checked',
  checked: true,
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  label: 'Disabled',
  disabled: true,
};