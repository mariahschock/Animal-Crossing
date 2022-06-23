import React from 'react';
import { useState, useEffect } from 'react';
import { getFish } from './services/fetch-utils';
import FishList from './FishList';

import './App.css';

function App() {
  const [fishes, setFish] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;
   
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const fishes = await getFish(from, to);

      setFish(fishes);
    }
    fetch();
  }, [page]);


  return (
    <>
      <h2>Current Page: {page}</h2>
      <div className="buttons">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button disabled={page >= 8} onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <FishList fishes={fishes} />
    </>
  );
}

export default App;