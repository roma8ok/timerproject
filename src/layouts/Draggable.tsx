import React, { useState, useMemo, useCallback, useEffect, FC, CSSProperties } from 'react';

const POSITION = { x: 0, y: 0 };

export interface DraggableProps {
  id: number;
  onDrag: Function;
  onDragEnd: Function;
  children: React.ReactNode;
}

export const Draggable: FC<DraggableProps> = (
  { id, onDrag, onDragEnd, children },
) => {
  const [ state, setState ] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState(state => ({
      ...state,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = useCallback(({ clientX, clientY }) => {
    const translation = { x: clientX - state.origin.x, y: clientY - state.origin.y };

    setState(state => ({
      ...state,
      translation,
    }));

    onDrag({ translation, id });
  }, [ state.origin, onDrag, id ]);

  const handleMouseUp = useCallback(() => {
    setState(state => ({
      ...state,
      isDragging: false,
    }));

    onDragEnd();
  }, [ onDragEnd ]);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      setState(state => ({
        ...state,
        translation: POSITION,
      }));
    }
  }, [ state.isDragging, handleMouseMove, handleMouseUp ]);

  const styles: CSSProperties = useMemo(() => ({
    cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
    transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
    zIndex: state.isDragging ? 2 : 1,
    position: state.isDragging ? 'absolute' : 'relative',
  }), [ state.isDragging, state.translation ]);

  return (
    <div style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};
