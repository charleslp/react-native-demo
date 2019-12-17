import {combineReducers} from 'redux';
const defaultState = {
  userInfo: {},
  movies: {},
};
function getAllInfo(state = defaultState.userInfo, action) {
  switch (action.type) {
    case 'SET-DATA':
      return action.data;
    default:
      return state;
  }
}
function getMovieData(state = defaultState.movies, action) {
  switch (action.type) {
    case 'SET-MOVIE':
      return action.data;
    default:
      return state;
  }
}
export default combineReducers({
  getAllInfo,
  getMovieData,
});
