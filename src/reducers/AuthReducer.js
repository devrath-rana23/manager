import {EMAIL_CHANGED, PASSWORD_CHANGED} from '../actions/types';

const INITIAL_STATE = {email: '', password: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}; //We need to trick redux that some change is made that's why we create new object instead of adding new element in old object else it will think no changes are made and may give issues
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    default:
      return state;
  }
};
