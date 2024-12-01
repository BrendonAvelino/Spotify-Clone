import axios from 'axios';

export const searchMusic = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/music/search?query=${query}`);
    dispatch({ type: 'SEARCH_MUSIC_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'SEARCH_MUSIC_FAIL', payload: error.message });
  }
};
