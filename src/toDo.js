import { useState } from 'react';
import React from 'react';
let nextId = 0;

export default function List() {
  const [name, setName] = useState('');

  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>List</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button
        onClick={() => {
          setName('');
          artists.push({ id: nextId++, name: name });
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
