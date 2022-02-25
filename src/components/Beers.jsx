import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Beers() {
  const [dataFromApi, setDataFromApi] = useState([]);
  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => res.json())
      .then(data => setDataFromApi(data))
      .catch(err => console.error(err));
  }, []);
  console.log(dataFromApi);
  return (
    <div>
      <Header />
      {dataFromApi.map(beer => (
        <div className="beer-card" key={beer._id}>
          <h2>{beer.name}</h2>
        </div>
      ))}
    </div>
  );
}
