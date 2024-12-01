import React from 'react';
import Track from './Track'; // Componente de música
import '../styles/Home.css';

const Home = () => {
  const tracks = [
    {
      name: 'Tua Gloria',
      artist: 'Artista Exemplo',
      album: 'https://via.placeholder.com/150', // Imagem do álbum
      url: 'http://localhost:5000/music/TuaGloria.mp3' // URL da música
    },
    {
      name: 'Outra Música',
      artist: 'Outro Artista',
      album: 'https://via.placeholder.com/150', // Imagem do álbum
      url: 'http://localhost:5000/music/OutraMusica.mp3' // URL da música
    }
  ];

  return (
    <div className="home">
      <div className="page-content">
        {tracks.map((track, index) => (
          <Track
            key={index}
            name={track.name}
            artist={track.artist}
            album={track.album}
            url={track.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
