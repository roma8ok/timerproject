import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { TimerClock, TimerClockMode, TimerClockProps } from './TimerClock';
import globalStyleDecorator from '../styles/decorators';

const TIME = new Date(2020, 12, 25, 17, 49, 31);

const Template: Story<TimerClockProps> = ({ mode, time }) =>
  <TimerClock mode={mode} time={time} />;

export const HMS = Template.bind({});
HMS.args = {
  mode: TimerClockMode.HMS,
  time: TIME,
};

export const HM = Template.bind({});
HM.args = {
  mode: TimerClockMode.HM,
  time: TIME,
};

export const MS = Template.bind({});
MS.args = {
  mode: TimerClockMode.MS,
  time: TIME,
};

export default {
  title: 'TimerClock',
  component: TimerClock,
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
