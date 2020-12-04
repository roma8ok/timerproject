import React from 'react';

import { TimerController } from '../controllers/TimerController';

export default function TestView() {
  return (
    <>
      <div>Test View</div>
      <br />
      <TimerController />
      <br />
      <TimerController />
      <br />
      <TimerController />
      <br />
      <TimerController />
    </>
  );
}
