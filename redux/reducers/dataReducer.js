import {LOADING_EVENTS, SET_EVENTS} from '../types';

const initialState = {
  events: [],
  loading_events: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading_events: false,
      };
    case LOADING_EVENTS:
      return {
        ...state,
        loading_events: true,
      };
    default:
      return state;
  }
}
