import React from 'react';
import { useState, useEffect } from 'react';
import { getFish } from './services/fetch-utils';
import FishList from './FishList';
import Music from './Music';

import './App.css';

function App() {
  const [fishes, setFishes] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 19;
   
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const fishes = await getFish(from, to);

      setFishes(fishes);
    }
    fetch();
  }, [page]);


  return (
    <>
      <div className="body">
        <h1>Animal Crossing Fish Page: {page}</h1>
        <Music />
        <div className="buttons">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
          <button disabled={page >= 8} onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
        <FishList fishes={fishes} />
      </div>
    </>
  );
}

export default App;