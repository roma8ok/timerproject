import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Button, ButtonProps } from './Button';
import globalStyleDecorator from '../styles/decorators';

const Template: Story<ButtonProps> = ({ title, fullWidth, onClick }) =>
  <Button title={title} fullWidth={fullWidth} onClick={onClick} />;

export const Default = Template.bind({});
Default.args = {
  title: 'button',
  onClick: () => null,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'button',
  fullWidth: true,
  onClick: () => null,
};

export default {
  title: 'Button',
  component: Button,
  onClick: { action: 'clicked', table: { disable: true } },
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
