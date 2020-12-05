import React, { FC, useCallback, useEffect, useState } from 'react';

import { TimerClockMode } from '../components/TimerClock';
import { TimerDisplay } from '../components/TimerDisplay';
import { TimerModel } from '../models/TimerModel';

export interface TimerControllerProps {
}

export const TimerController: FC<TimerControllerProps> = () => {
  const [ timerModel ] = useState(new TimerModel(0));
  const [ timerDisplay, setTimerDisplay ] = useState(
    <TimerDisplay
      clockMode={TimerClockMode.MS}
      time={timerModel.getAllPassedDate()}
      isRunning={timerModel.isRunning}
      onClick={() => timerModel.toggleRunning()}
    />,
  );

  const render = useCallback(() => {
    setTimerDisplay(
      <TimerDisplay
        clockMode={TimerClockMode.MS}
        time={timerModel.getAllPassedDate()}
        isRunning={timerModel.isRunning}
        onClick={() => timerModel.toggleRunning()}
      />,
    );
  }, [ timerModel ]);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      if (timerModel.isRunning) {
        timerModel.changeSegment(new Date());
      }
      render();
    }, 100);
    return () => clearInterval(tempInterval);
  }, [ timerModel, render ]);

  return timerDisplay;
};
