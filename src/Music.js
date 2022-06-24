import React from 'react';
import './App.css';
import sunny from './sunny.mp3';

export default function Music() {
  const audio = new Audio(
    sunny, { interrupt: true });
  const start = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
  };

  return (
    <div className="sunny">
      <button onClick={start}>🎵 Click Me 🎵</button>
      <button onClick={stop}>Pause</button>
    </div>
  );
}
