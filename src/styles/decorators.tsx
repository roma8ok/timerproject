import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import './font.css';

const globalStyleDecorator = (StoryInstance: Story) => (
  <>
    <StoryInstance />
  </>
);

export default globalStyleDecorator;
