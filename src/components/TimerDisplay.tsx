import React, { FC } from 'react';
import styled from 'styled-components';

import { FontFamilies, FontWeight } from '../styles/fonts';

const getHours = (time: Date) => {
  const hours = time.getHours();
  return hours < 10 ? `0${hours}` : hours;
};

const getMinutes = (time: Date) => {
  const minutes = time.getMinutes();
  return minutes < 10 ? `0${minutes}` : minutes;
};

const getSeconds = (time: Date) => {
  const seconds = time.getSeconds();
  return seconds < 10 ? `0${seconds}` : seconds;
};

export enum TimerMode {
  HMS = 'HMS',
  HM = 'HM',
  MS = 'MS',
}

const getTimer = (mode: TimerMode, time: Date) => {
  switch (mode) {
    case TimerMode.HMS:
      return getHours(time) + ':' + getMinutes(time) + ':' + getSeconds(time);
    case TimerMode.HM:
      return getHours(time) + ':' + getMinutes(time);
    case TimerMode.MS:
      return getMinutes(time) + ':' + getSeconds(time);
  }
};

export interface TimerDisplayProps {
  mode: TimerMode;
  time: Date;
}

export const TimerDisplay: FC<TimerDisplayProps> = ({ mode, time }) => {
  return (
    <Container>
      {getTimer(mode, time)}
    </Container>
  );
};

const Container = styled.div`
  font-family: ${FontFamilies.main};
  font-weight: ${FontWeight.w300};
  font-size: 36px;
`;
