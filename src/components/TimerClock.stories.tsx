import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { TimerClock, TimerClockMode, TimerClockProps, TimerClockStyles } from './TimerClock';
import globalStyleDecorator from '../styles/decorators';

const TIME = new Date(2020, 12, 25, 17, 49, 31);

const Template: Story<TimerClockProps> = ({ mode, time, style }) =>
  <TimerClock mode={mode} time={time} style={style} />;

export const HMSFaded = Template.bind({});
HMSFaded.args = {
  mode: TimerClockMode.HMS,
  time: TIME,
  style: TimerClockStyles.faded,
};

export const HMSBright = Template.bind({});
HMSBright.args = {
  mode: TimerClockMode.HMS,
  time: TIME,
  style: TimerClockStyles.bright,
};

export const HMFaded = Template.bind({});
HMFaded.args = {
  mode: TimerClockMode.HM,
  time: TIME,
  style: TimerClockStyles.faded,
};

export const HMBright = Template.bind({});
HMBright.args = {
  mode: TimerClockMode.HM,
  time: TIME,
  style: TimerClockStyles.bright,
};

export const MSFaded = Template.bind({});
MSFaded.args = {
  mode: TimerClockMode.MS,
  time: TIME,
  style: TimerClockStyles.faded,
};

export const MSBright = Template.bind({});
MSBright.args = {
  mode: TimerClockMode.MS,
  time: TIME,
  style: TimerClockStyles.bright,
};

export default {
  title: 'TimerClock',
  component: TimerClock,
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
