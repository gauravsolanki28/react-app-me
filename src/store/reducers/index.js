// index.js

import { combineReducers } from 'redux';
import AuthReducer from './Authentication/AuthReducer';
import LoadingReducer from './Loader/LoadReducer';


const rootreducer = combineReducers({
  AuthReducer,
  LoadingReducer
})

export default rootreducer