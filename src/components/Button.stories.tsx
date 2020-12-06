import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Button, ButtonProps, ButtonStyles } from './Button';
import globalStyleDecorator from '../styles/decorators';

const Template: Story<ButtonProps> = ({ title, style, fullWidth, onClick }) =>
  <Button title={title} style={style} fullWidth={fullWidth} onClick={onClick} />;

export const Faded = Template.bind({});
Faded.args = {
  title: 'button',
  style: ButtonStyles.faded,
  fullWidth: false,
  onClick: () => null,
};

export const FullWidthFaded = Template.bind({});
FullWidthFaded.args = {
  title: 'button',
  style: ButtonStyles.faded,
  fullWidth: true,
  onClick: () => null,
};

export const Bright = Template.bind({});
Bright.args = {
  title: 'button',
  style: ButtonStyles.bright,
  fullWidth: false,
  onClick: () => null,
};

export const FullWidthBright = Template.bind({});
FullWidthBright.args = {
  title: 'button',
  style: ButtonStyles.bright,
  fullWidth: true,
  onClick: () => null,
};

export default {
  title: 'Button',
  component: Button,
  onClick: { action: 'clicked', table: { disable: true } },
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
