import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
  } from '../actions/types';
  
  const initialState = {
    text: '',
    movies: {
        Search: []
    },
    loading: false,
    movie: [],
    page: 1
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_MOVIE:
        return {
          ...state,
          text: action.payload,
          loading: false,
          page: 1
        };
      case FETCH_MOVIES:
        return {
          ...state,
          movies: {...state.movies, Search: [...state.movies.Search, ...action.payload.Search]},
          loading: false,
          page: state.page+1
        };
      // case FETCH_MOVIE:
      //   return {
      //     ...state,
      //     movie: action.payload,
      //     loading: false
      //   };
      case LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }