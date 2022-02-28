import axios from 'axios';
import React, { useState } from 'react';
import Header from '../components/Header';

export default function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewer_tips, setTips] = useState('');
  const [attenuation_level, setAttenuation] = useState('');
  const [contributed_by, setContributed] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    // prevent default behaviour of the submit
    e.preventDefault();

    // post the gathered data to the api
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewer_tips,
        attenuation_level,
        contributed_by,
      })
      .then(res => {
        if (res.status === 200) {
          setMessage('Successfully added new beer');
        }
      })
      .catch(err => {
        console.error(err);
        setMessage('Failed to create new beer');
      });

    // clear the form fields
    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setTips('');
    setAttenuation('');
    setContributed('');
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <div>
      <Header />
      <h1>Add your own beer</h1>
      {message && <span className="response-message">{message}</span>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Name of your beer"
          name="name"
          id="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          placeholder="Catchphrase for your beer"
          name="tagline"
          id="tagline"
          onChange={e => setTagline(e.target.value)}
          value={tagline}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          placeholder="Describe your beer"
          name="description"
          id="description"
          cols="30"
          rows="5"
          onChange={e => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <label htmlFor="first_brewed">First brewed: </label>
        <input
          type="text"
          placeholder="MM/YYYY"
          name="first_brewed"
          id="first_brewed"
          onChange={e => setFirstBrewed(e.target.value)}
          value={first_brewed}
        />
        <label htmlFor="brewer_tips">Brewer tips: </label>
        <input
          type="text"
          placeholder="How to brew it best"
          name="brewer_tips"
          id="brewer_tips"
          onChange={e => setTips(e.target.value)}
          value={brewer_tips}
        />
        <label htmlFor="attenuation">Level of attenuation: </label>
        <input
          type="number"
          placeholder="Number only here"
          name="attenuation_level"
          id="attenuation"
          onChange={e => setAttenuation(e.target.value)}
          value={attenuation_level}
        />
        <label htmlFor="contributed_by">Contributed by: </label>
        <input
          type="text"
          placeholder="Refer yourself"
          name="contributed_by"
          id="contributed_by"
          onChange={e => setContributed(e.target.value)}
          value={contributed_by}
        />
        <button type="submit">Add new beer</button>
      </form>
    </div>
  );
}
