import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMusic } from '../actions/musicActions';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { tracks, error, loading } = useSelector(state => state.music);

  const handleSearch = () => {
    dispatch(searchMusic(query));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar música, artista ou álbum"
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <div>
        {tracks.map(track => (
          <div key={track._id}>
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <audio controls>
              <source src={track.url} type="audio/mp3" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
