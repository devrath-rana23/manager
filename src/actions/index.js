import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};
export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};
export const loginUser = ({email, password}) => {
  return dispatch => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
          })
          .catch(() => {
            loginUserFail(dispatch);
          });
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL, payload: 'Authentication failed'});
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({type: LOGIN_USER_SUCCESS, payload: user});
};
