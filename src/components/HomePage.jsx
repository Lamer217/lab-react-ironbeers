import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Link to="/beers">Hello</Link>
      <Link to="/random-beer"></Link>
      <Link to="/new-beer"></Link>
    </div>
  );
}
