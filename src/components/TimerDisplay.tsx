import React, { FC } from 'react';

import { Button, ButtonStyles } from './Button';
import { TimerClock, TimerClockMode, TimerClockStyles } from './TimerClock';
import { FontFamilies } from '../styles/fonts';

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
        <input style={{ width: '100%', fontFamily: FontFamilies.main }} />
      </div>

      <div style={{ display: 'flex' }}>
        <TimerClock
          mode={clockMode}
          time={time}
          style={isRunning ? TimerClockStyles.bright : TimerClockStyles.faded}
        />

        <Button
          title={isRunning ? 'PAUSE' : 'START'}
          style={isRunning ? ButtonStyles.bright : ButtonStyles.faded}
          fullWidth
          onClick={() => onClick()}
        />
      </div>

    </div>
  );
};
