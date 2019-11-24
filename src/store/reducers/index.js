// index.js

import { combineReducers } from 'redux';
import AuthReducer from './Authentication/AuthReducer';
import ModalReducer from './Modal/ModalReducer';


const rootreducer = combineReducers({
  AuthReducer,
  ModalReducer
})

export default rootreducer