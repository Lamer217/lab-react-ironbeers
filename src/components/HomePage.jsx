import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

export default function HomePage() {
  return (
    <div className="home-page">
      <Link to="/beers">
        <img src={beersImg} alt="variety of beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reprehenderit, dignissimos eligendi odio doloremque officiis optio
          voluptatum exercitationem perspiciatis quod!
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="beer counter" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde
          magni commodi ab nostrum similique explicabo exercitationem ratione
          necessitatibus rem.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="beer bottle and mug" />
        <h2>Add New Beer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam illo
          suscipit consequatur fugit hic voluptas perspiciatis quos doloremque
          molestias tempore.
        </p>
      </Link>
    </div>
  );
}
