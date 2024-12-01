const initialState = {
    tracks: [],
    loading: false,
    error: null,
  };
  
  const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_MUSIC_SUCCESS':
        return { ...state, tracks: action.payload, loading: false };
      case 'SEARCH_MUSIC_FAIL':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default musicReducer;
  