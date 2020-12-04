import React, { FC } from 'react';
import styled from 'styled-components';

import { TimerClock, TimerClockMode } from './TimerClock';

export interface TimerDisplayProps {
  clockMode: TimerClockMode;
  time: Date;
  isRunning: boolean;
  onClick: Function;
}

export const TimerDisplay: FC<TimerDisplayProps> = ({ clockMode, time, isRunning, onClick }) => {
  return (
    <Container>
      <TimerClock mode={clockMode} time={time} />

      <button onClick={() => onClick()}>
        {isRunning ? 'Pause' : 'Start'}
      </button>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
