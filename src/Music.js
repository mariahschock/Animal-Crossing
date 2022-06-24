import React from 'react';
import './App.css';
import sunny from './sunny.mp3';

export default function Music() {
  const audio = new Audio(
    sunny, { interrupt: true });
  const start = () => {
    audio.play();
  };

  return (
    <div className="sunny">
      <button onClick={start}>🎵 Click Me 🎵</button>
    </div>
  );
}
