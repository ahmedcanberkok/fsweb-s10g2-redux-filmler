import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import favReducer from './favReducer';


const reducers = combineReducers({
    movieReducer,  
    favReducer,
  });

export default reducers;