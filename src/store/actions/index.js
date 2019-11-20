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

  export const LoadingInAction = () => ({
    type: actionType.LOADER_IN,
    payload: {
      isLoading:true
    },
  });

  export const LoadingOutAction = () => ({
    type: actionType.LOADER_OUT,
    payload: {
      isLoading:false
    },
  });
