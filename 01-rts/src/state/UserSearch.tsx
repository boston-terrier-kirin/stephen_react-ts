import React, { useState } from 'react';

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

interface User {
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search</h1>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={onClick}>Find User</button>
      <hr />
      <div>
        {user ? (
          <>
            <h3>Name: {user.name}</h3>
            <h3>Age:{user.age}</h3>
          </>
        ) : (
          <div>User Not Found</div>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
