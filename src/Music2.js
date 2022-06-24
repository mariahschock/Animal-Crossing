import React from 'react';
import './App.css';
import announcement from './announcement.mp3';

export default function Music2() {
  const audio = new Audio(
    announcement, { interrupt: true });
  const start = () => {
    audio.play();
  };
    
  return (
    <div className="announcement">
      <button onClick={start}>🎵 Click Me 🎵</button>

    </div>
  );
}
    