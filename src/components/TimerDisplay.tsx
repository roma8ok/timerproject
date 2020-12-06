import React, { FC } from 'react';

import { Button } from './Button';
import { TimerClock, TimerClockMode } from './TimerClock';

export interface TimerDisplayProps {
  clockMode: TimerClockMode;
  time: Date;
  isRunning: boolean;
  onClick: Function;
}

export const TimerDisplay: FC<TimerDisplayProps> = (
  { clockMode, time, isRunning, onClick },
) => {
  return (
    <div style={{ display: 'inline-block' }}>

      <div style={{ display: 'flex' }}>
        <input style={{ width: '100%' }} />
      </div>

      <div style={{ display: 'flex' }}>
        <TimerClock mode={clockMode} time={time} />

        <Button
          title={isRunning ? 'Pause' : 'Start'}
          fullWidth
          onClick={() => onClick()}
        />
      </div>

    </div>
  );
};
