import React, { FC, useCallback, useEffect, useState } from 'react';

import { TimerClockMode } from '../components/TimerClock';
import { TimerDisplay } from '../components/TimerDisplay';

export interface TimerControllerProps {
}

export const TimerController: FC<TimerControllerProps> = () => {
  const [ passed, setPassed ] = useState(0);
  const [ segment, setSegment ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ startedTime, setStartedTime ] = useState(new Date());

  const handleOnClick = () => {
    if (isRunning) {
      setIsRunning(false);
      setPassed(passed + segment);
      setSegment(0);
    } else {
      setIsRunning(true);
      setSegment(0);
      setStartedTime(new Date());
    }
  };

  const interval = useCallback(() => {
    if (isRunning) {
      setSegment(new Date().getTime() - startedTime.getTime());
    }
  }, [ isRunning, startedTime ]);

  useEffect(() => {
    const x = setInterval(interval, 1000);
    return () => clearInterval(x);
  }, [ interval ]);

  return (
    <TimerDisplay
      clockMode={TimerClockMode.MS}
      time={new Date(passed + segment)}
      isRunning={isRunning}
      onClick={handleOnClick}
    />
  );
};
