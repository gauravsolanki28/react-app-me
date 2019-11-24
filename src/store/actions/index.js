import * as actionType from './ActionType'
export const SignInAction = () => ({
    type: actionType.SIGN_IN,
    payload: {
      isAuthed:true,
    }
  });
  export const SignUpAction = () => ({
    type: actionType.SIGN_UP,
    payload: {
    }
  });
  export const LogOutAction = () => ({
    type: actionType.LOG_OUT,
    payload: {
      isAuthed:false,
    }
  });

  export const ModalinAction = () => ({
    type: actionType.MODAL_IN,
    payload: {
      isModalWindow:true
    },
  });

  export const ModalOutAction = () => ({
    type: actionType.MODAL_OUT,
    payload: {
      isModalWindow:false
    },
  });
