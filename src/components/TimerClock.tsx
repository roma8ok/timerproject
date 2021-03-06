import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../styles/colors';
import { FontFamilies, FontWeight } from '../styles/fonts';

const getHours = (time: Date) => {
  const hours = time.getUTCHours();
  return hours < 10 ? `0${hours}` : hours;
};

const getMinutes = (time: Date) => {
  const minutes = time.getUTCMinutes();
  return minutes < 10 ? `0${minutes}` : minutes;
};

const getSeconds = (time: Date) => {
  const seconds = time.getUTCSeconds();
  return seconds < 10 ? `0${seconds}` : seconds;
};

export enum TimerClockMode {
  HMS = 'HMS',
  HM = 'HM',
  MS = 'MS',
}

const getTimer = (mode: TimerClockMode, time: Date) => {
  switch (mode) {
    case TimerClockMode.HMS:
      return getHours(time) + ':' + getMinutes(time) + ':' + getSeconds(time);
    case TimerClockMode.HM:
      return getHours(time) + ':' + getMinutes(time);
    case TimerClockMode.MS:
      return getMinutes(time) + ':' + getSeconds(time);
  }
};

export enum TimerClockStyles {
  faded = 'faded',
  bright = 'bright',
}

const STYLES = {
  faded: { color: Colors.white },
  bright: { color: Colors.green },
};

export interface TimerClockProps {
  mode: TimerClockMode;
  time: Date;
  style?: TimerClockStyles,
}

export const TimerClock: FC<TimerClockProps> = (
  { mode, time, style = TimerClockStyles.faded },
) => {
  return (
    <Container color={STYLES[style].color}>
      {getTimer(mode, time)}
    </Container>
  );
};

const Container = styled.div<{ color: string }>`
  padding: 0 10px;
  font-family: ${FontFamilies.main};
  font-weight: ${FontWeight.w300};
  font-size: 36px;
  background-color: ${Colors.black};
  color: ${props => props.color};
  user-select: none;
  text-align: center;
`;
