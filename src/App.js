// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Playlist from './components/Playlist';
import Navbar from './components/Navbar';
import './styles/App.css'; // Importando os estilos principais

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
};

export default App;
