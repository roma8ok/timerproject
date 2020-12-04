import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { TimerController, TimerControllerProps } from './TimerController';
import globalStyleDecorator from '../styles/decorators';

const Template: Story<TimerControllerProps> = () => <TimerController />;

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'TimerController',
  component: TimerController,
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
