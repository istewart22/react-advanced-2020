import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        const handleRemoveItem = (id) => {
          const filteredPeople = people.filter((person) => person.id != id);
          setPeople(filteredPeople);
        };
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => handleRemoveItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear all
      </button>
    </>
  );
};

export default UseStateArray;
