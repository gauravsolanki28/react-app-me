import * as actionType from '../../actions/ActionType';

const initialState = {
  isModalWindow:false
}
const ModalReducer = (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case actionType.MODAL_IN:
      return action.payload
    case actionType.MODAL_OUT:
      return action.payload
    default:
      return newState
  }
}


export default ModalReducer;