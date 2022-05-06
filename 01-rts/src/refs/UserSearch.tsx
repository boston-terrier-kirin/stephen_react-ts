import React, { useState, useRef, useEffect } from 'react';

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
  // refの使い方
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current);
    }
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search V3</h1>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
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
