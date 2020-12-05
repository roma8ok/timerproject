import React, { useState } from 'react';

import { Button } from '../components/Button';
import { TimerController } from '../controllers/TimerController';

export default function TestView() {
  const [ timers, setTimers ] = useState([] as any);

  const addTimer = () => {
    setTimers([ ...timers, <TimerController /> ]);
  };

  return (
    <>
      <div>Test</div>
      <br />

      <Button title='Add timer' onClick={() => addTimer()} />
      <br />
      <br />
      {timers.map((el: typeof TimerController) => <>{el}<br /></>)}
    </>
  );
}
