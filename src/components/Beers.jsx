import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

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
    <div className="beers">
      <Header />
      {dataFromApi.map(beer => (
        <Link to={`/beers/${beer.id}`}>
          <div className="beer-card" key={beer._id}>
            <img src={beer.image_url} alt="current beer" />
            <div>
              <h2>{beer.name}</h2>
              <span>{beer.tagline}</span>
              <span>
                <strong>Created by: </strong>
                {beer.contributed_by}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
