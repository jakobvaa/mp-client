import {SET_EVENTS, LOADING_EVENTS} from '../types';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// Logs in user. Authenticates session
// userData: { email: ..., password:...}
export const getAllEvents = () => dispatch => {
  dispatch({type: LOADING_EVENTS});
  axios
    .get('https://us-central1-meet-peeps.cloudfunctions.net/api/events')
    .then(res => {
      dispatch({type: SET_EVENTS, payload: res.data});
    })
    .catch(err => {
      console.log(err.message);
      //dispatch({type: SET_ERRORS, payload: err.response.data});
    });
};
