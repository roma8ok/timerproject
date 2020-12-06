import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Draggable, DraggableProps } from './Draggable';
import { Button } from '../components/Button';
import globalStyleDecorator from '../styles/decorators';

const Template: Story<DraggableProps> = (
  { id, onDrag, onDragEnd, children },
) =>
  <Draggable id={id} onDrag={onDrag} onDragEnd={onDragEnd}>
    {children}
  </Draggable>;

export const Default = Template.bind({});
Default.args = {
  id: 0,
  onDrag: () => null,
  onDragEnd: () => null,
  children: <Button title='drag and drop me' onClick={() => null} />,
};

export default {
  title: 'Draggable',
  component: Draggable,
  argTypes: {
    id: { table: { disable: true } },
    onDrag: { table: { disable: true } },
    onDragEnd: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  decorators: [ (Story) => globalStyleDecorator(Story) ],
} as Meta;
