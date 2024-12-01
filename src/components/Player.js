import React from 'react';

const Player = ({ track }) => {
  return (
    <div>
      <h2>Tocando: {track.name} - {track.artist}</h2>
      <audio controls>
        <source src={track.url} type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default Player;
