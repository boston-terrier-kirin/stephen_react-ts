import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName('');
  };

  const guestsToRender = guests.map((guest) => <li key={guest}>{guest}</li>);

  return (
    <div>
      <h3>Guest List</h3>

      <ul>{guestsToRender}</ul>

      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
