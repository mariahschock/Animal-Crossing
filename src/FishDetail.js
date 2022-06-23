import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleFish } from './services/fetch-utils';
import { Link } from 'react-router-dom';
import museum from './museum.png';
import catchphrase from './catchphrase.png';

import './App.css';

export default function FishDetail() {
  const [fish, setFish] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchFish() {
      const data = await getSingleFish(params.id);

      setFish(data);
    }
    fetchFish();
  }, [params.id]);

  return (
    <>
      <div className="fish-detail">
        <Link to='/'>Home</Link>
        <div className="fish-data">
          <div className="catchphrase-left">
            <p>Catch Phrase: {fish.catch_phrase}</p>
            <img src={catchphrase} />
          </div>
          <div className="fish-name">
            <h2>{fish.name}</h2>
            <img className="fish-image" src={fish.icon_url} />
            <p>Found: {fish.location} <br />
               Worth: {fish.price} <br />
               Shadow Size: {fish.shadow_size} <br />
               Can be caught: {fish.time_0}</p>
          </div>
          <div className="museum-phrase-right">
            <p>{fish.museum_phrase}</p>
            <img src={museum} />
          </div>
        </div>
      </div> 
    </>
  );
}
