import React from 'react';
import ReactDOM from 'react-dom/client';
import UserSearch from './classes/UserSearch';

const users = [
  {
    name: 'Sara',
    age: 20,
  },
  {
    name: 'Alex',
    age: 21,
  },
  {
    name: 'Michael',
    age: 24,
  },
];

const App = () => {
  return (
    <div>
      <UserSearch users={users} />
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
