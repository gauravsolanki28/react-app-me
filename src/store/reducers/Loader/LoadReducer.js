import * as actionType from '../../actions/ActionType';

const initialState = {
  isLoading:false
}
const LoadingReducer = (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case actionType.LOADER_IN:
      return action.payload
    case actionType.LOADER_OUT:
      return action.payload
    default:
      return newState
  }
}


export default LoadingReducer;