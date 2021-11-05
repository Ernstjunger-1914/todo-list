import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import React, { useState } from 'react';
import faker from 'faker';
import './App.css';

export default function Test() {
  const [people, setPeople]=React.useState([]);
  const [time, setTime]=React.useState(new Date());

  React.useEffect(()=> {
    setPeople([...Array(100).keys()].map(key=> {
      return {
        id: key,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        bio: faker.lorem.lines(Math.random()*100),
      };
    }));
  }, []);

  React.useEffect(()=> {
    const interval=setInterval(()=> {
      setTime(new Date());
    }, 1000);

    return ()=> clearInterval(interval);
  });

  return (
      <div className="Test">
        <h1>{time.toISOString()}</h1>
        <ul>
          {people.map((person)=> (
            <li key={person.id}>
              <h2>{person.name}</h2>
            </li>
          ))}
        </ul>
      </div>
  );
}
