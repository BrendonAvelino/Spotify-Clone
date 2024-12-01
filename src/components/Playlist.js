// Playlist.js
import React from 'react';
import '../styles/Playlist.css';  // Corrigindo o caminho do CSS

const Playlist = () => {
  return (
    <div className="page-content">
      <div className="playlist-card">
        <img src="some-image.jpg" alt="Album" />
        <h3>Playlist Name</h3>
        <p>Details about the playlist</p>
        <button className="btn">Play</button>
      </div>
    </div>
  );
};

export default Playlist;
