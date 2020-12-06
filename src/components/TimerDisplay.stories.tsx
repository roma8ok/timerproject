import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import globalStyleDecorator from '../styles/decorators';
import { TimerClockMode } from './TimerClock';
import { TimerDisplay, TimerDisplayProps } from './TimerDisplay';

const TIME = new Date(2020, 12, 25, 17, 49, 31);

const Template: Story<TimerDisplayProps> = ({ clockMode, time, isRunning, onClick }) =>
  <TimerDisplay clockMode={clockMode} time={time} isRunning={isRunning} onClick={onClick} />;

export const HMSStop = Template.bind({});
HMSStop.args = {
  clockMode: TimerClockMode.HMS,
  time: TIME,
  isRunning: false,
};

export const HMSRun = Template.bind({});
HMSRun.args = {
  clockMode: TimerClockMode.HMS,
  time: TIME,
  isRunning: true,
};

export const HMStop = Template.bind({});
HMStop.args = {
  clockMode: TimerClockMode.HM,
  time: TIME,
  isRunning: false,
};

export const HMRun = Template.bind({});
HMRun.args = {
  clockMode: TimerClockMode.HM,
  time: TIME,
  isRunning: true,
};

export const MSStop = Template.bind({});
MSStop.args = {
  clockMode: TimerClockMode.MS,
  time: TIME,
  isRunning: false,
};

export const MSRun = Template.bind({});
MSRun.args = {
  clockMode: TimerClockMode.MS,
  time: TIME,
  isRunning: true,
};

export default {
  title: 'TimerDisplay',
  component: TimerDisplay,
  onClick: { action: 'clicked', table: { disable: true } },
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
