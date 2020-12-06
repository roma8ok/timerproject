import { inRange, range } from 'lodash';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../components/Button';
import { TimerController } from '../controllers/TimerController';
import { Draggable } from '../layouts/Draggable';

const HEIGHT = 80;

export default function TestView() {
  const [ items, setItems ] = useState(range(1));
  const [ state, setState ] = useState({
    order: items,
    dragOrder: items,
    draggedIndex: null,
  });

  const handleDrag = useCallback(({ translation, id }) => {
    const delta = Math.round(translation.y / HEIGHT);
    const index = state.order.indexOf(id);
    const dragOrder = state.order.filter(index => index !== id);

    if (!inRange(index + delta, 0, items.length)) {
      return;
    }

    dragOrder.splice(index + delta, 0, id);

    setState(state => ({
      ...state,
      draggedIndex: id,
      dragOrder,
    }));
  }, [ state.order, items.length ]);

  const handleDragEnd = useCallback(() => {
    setState(state => ({
      ...state,
      order: state.dragOrder,
      draggedIndex: null,
    }));
  }, []);

  const addTimer = () => {
    setItems(items => [ ...items, items.length ]);
    setState(state => ({
      ...state,
      order: [ ...state.order, state.order.length ],
      dragOrder: [ ...state.dragOrder, state.dragOrder.length ],
    }));
  };

  return (
    <Container>
      <Button title='Add timer' onClick={() => addTimer()} />
      <br />
      <br />

      {items.map(index => {
        const isDragging = state.draggedIndex === index;
        const draggedTop = state.order.indexOf(index) * (HEIGHT + 10);
        const top = state.dragOrder.indexOf(index) * (HEIGHT + 10);
        return (
          <Draggable
            id={index}
            key={index}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            <Wrapper top={isDragging ? draggedTop : top}>
              <TimerController />
            </Wrapper>
          </Draggable>
        );
      })}

    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div<{ top: number }>`
  height: ${HEIGHT}px;
  user-select: none;
  display: flex;
  position: absolute;
  top: ${props => `${props.top}px`};
`;
