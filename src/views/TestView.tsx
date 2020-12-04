import React, { useEffect, useState } from 'react';

import { TimerDisplay, TimerMode } from '../components/TimerDisplay';

export default function TestView() {
  const [ currentTime, setCurrentTime ] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>Test View</div>
      <br />
      <br />
      <br />
      <TimerDisplay mode={TimerMode.MS} time={currentTime} />
    </>
  );
}
