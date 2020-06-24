import {SET_ERRORS, CLEAR_ERRORS, LOADING_UI, LOADING_DONE} from '../types';

const initialState = {
  loading: true,
  errors: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: {},
      };
    case LOADING_DONE:
      return {
        ...state,
        loading: false,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
