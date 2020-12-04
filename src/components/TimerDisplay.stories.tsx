import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { TimerDisplay, TimerDisplayProps, TimerMode } from './TimerDisplay';
import globalStyleDecorator from '../styles/decorators';

const TIME = new Date(2020, 12, 25, 17, 49, 31);

const Template: Story<TimerDisplayProps> = ({ mode, time }) =>
  <TimerDisplay mode={mode} time={time} />;

export const HMS = Template.bind({});
HMS.args = {
  mode: TimerMode.HMS,
  time: TIME,
};

export const HM = Template.bind({});
HM.args = {
  mode: TimerMode.HM,
  time: TIME,
};

export const MS = Template.bind({});
MS.args = {
  mode: TimerMode.MS,
  time: TIME,
};

export default {
  title: 'TimerDisplay',
  component: TimerDisplay,
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
