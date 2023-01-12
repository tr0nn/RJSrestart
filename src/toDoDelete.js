import React from 'react';
import { useState } from 'react';

let nextId = 0;

export default function ToDoDelete() {
  const [name, setName] = useState('Add city');
  const [city, setCity] = useState([]);

  const deleteById = id => {
    setCity(oldValues => {
      return oldValues.filter(item => item.id !== id);
    });
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button
        onClick={() => {
          setName('');
          city.push({
            id: nextId++,
            name: name
          });
        }}
      >
        Add
      </button>
      <ul>
        {city.map(item => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                deleteById(item.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
