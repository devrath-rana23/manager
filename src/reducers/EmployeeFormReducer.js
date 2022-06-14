import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE:
      // newSTate = {}
      // newState[action.payload.prop] = action.payload.value iska alternative key interpolation
      return {...state, [action.payload.prop]: action.payload.value}; //here squre bracket is not array but key interpolation i.e. we are passing the key of this object at time of creation of this object here
    default:
      return state;
  }
};
