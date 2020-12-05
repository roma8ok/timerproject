import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Button, ButtonProps } from './Button';
import globalStyleDecorator from '../styles/decorators';

const Template: Story<ButtonProps> = ({ title, onClick }) =>
  <Button title={title} onClick={onClick} />;

export const Default = Template.bind({});
Default.args = {
  title: 'button',
  onClick: () => null,
};

export default {
  title: 'Button',
  component: Button,
  onClick: { action: 'clicked', table: { disable: true } },
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
