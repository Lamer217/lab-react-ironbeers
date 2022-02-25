import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';

export default function BeerDetails() {
  const params = useParams();
  const beerId = params.id;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(res => res.json())
      .then(beerObj => setBeer(beerObj))
      .catch(err => console.error(err));
  }, [beerId]);

  console.log(beer);

  return (
    <div>
      <Header />
      <div className="beer-detail-card">
        <img src={beer.image_url} alt="Beer can/bottle" />
        <div>
          <div>
            <h2>{beer.name}</h2>
            <span className="tagline">{beer.tagline}</span>
          </div>
          <div>
            <span>{beer.attenuation_level}</span>
            <span>
              <strong>{beer.first_brewed}</strong>
            </span>
          </div>
        </div>
        <p>
          <strong>{beer.description}</strong>
        </p>
        <span>{beer.contributed_by}</span>
      </div>
    </div>
  );
}
