import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleFish } from './services/fetch-utils';
import { Link } from 'react-router-dom';

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
      <Link to='/'>Home</Link>
      <div className="fish-detail">
        <div className="fish-data">
          <h3>{fish.name}</h3>
          <img src={fish.icon_url} />
          <p>Found: {fish.location}</p>
          <p>Worth: {fish.price}</p>
          <p>Shadow Size: {fish.shadow_size}</p>
          <p>Can be caught: {fish.time_0}</p>
          <p>Catch Phrase: {fish.catch_phrase}</p>
          <p>Museum Phrase: {fish.museum_phrase}</p>

        </div>
      </div>
    </>
  );
}
