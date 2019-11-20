import * as actionType from '../../actions/ActionType';

const initialState = {
  isAuthed:true
}
const token = localStorage.getItem("token");
if(token === null){
  initialState.isAuthed = false;
}
const AuthReducer = (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case actionType.SIGN_IN:
      return action.payload
    case actionType.LOG_OUT:
      return action.payload
    default:
      return newState
  }
}


export default AuthReducer;