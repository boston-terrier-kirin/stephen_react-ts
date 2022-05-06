import React, { ReactNode } from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: ReactNode;
}

export const Child = (props: ChildProps) => {
  return (
    <div>
      {props.color}
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = (props) => {
  return (
    <div>
      {props.color}
      {props.children}
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
};
