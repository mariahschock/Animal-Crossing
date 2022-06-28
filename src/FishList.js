import React from 'react';
import Fish from './Fish';

export default function FishList({ fishes }) {
  return (
    <div className="fish-list">
      {
        fishes.map((fish, i) => {
          return <Fish
            {...fish} key={fish.name + i + fish.id} />;
        })
      }
    </div>
  );
}