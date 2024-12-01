import React, { useState, useRef } from 'react';

const Track = ({ name, artist, album, url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Valor de volume (0 a 1)
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  return (
    <div className="track">
      <img src={album} alt={name} />
      <h3>{name}</h3>
      <p>{artist}</p>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src={url} />
      
      <div className="volume-control">
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default Track;
