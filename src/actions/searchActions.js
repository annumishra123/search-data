import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';

import { APIKey } from '../APIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = (text, page) => dispatch => {
    dispatch({
        type: LOADING
    })
  
    fetch(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}&page=${page}`)
    .then(async (response) =>{
        dispatch({
          type: FETCH_MOVIES,
          payload: await response.json()
        })
      }
    )
    .catch(err => console.log(err));
};


export const setLoading = () => {
  return {
    type: LOADING
  };
};