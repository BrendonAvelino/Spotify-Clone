// Navbar.js
import React from 'react';
import '../styles/Navbar.css';  // Corrigindo o caminho do CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Spotify Clone</div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/playlist">Playlist</a>
      </div>
    </nav>
  );
};

export default Navbar;
