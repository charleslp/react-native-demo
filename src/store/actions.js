export function setAllInfo(data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET-DATA', data});
  };
}

export function setMovieData(data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET-MOVIE', data});
  };
}
