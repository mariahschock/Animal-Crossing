import React from 'react';
import { useState, useEffect } from 'react';
import { getFish } from './services/fetch-utils';
import FishList from './FishList';

import './App.css';

function App() {
  const [fishes, setFish] = useState([]);
  const [page, setPage] = useState(1);
   
  
  useEffect(() => {
    async function fetch() {
    //   const from = page * perPage - perPage;
    //   const to = page * perPage;
      const fishes = await getFish();

      setFish(fishes);
    }
    fetch();
  }, [page]);


  return (
    <>
      <h2>Current Page: {page}</h2>
      <FishList fishes={fishes} />
    </>
  );
}

export default App;