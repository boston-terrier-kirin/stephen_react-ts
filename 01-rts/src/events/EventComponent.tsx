import React, { ChangeEvent, DragEvent } from 'react';

const EventComponent: React.FC = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    console.log('Dragged...', event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
