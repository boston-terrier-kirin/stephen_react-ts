import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './proos/Parent';

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
