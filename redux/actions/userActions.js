import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_AUTHENTICATED,
} from '../types';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// Logs in user. Authenticates session
// userData: { email: ..., password:...}
export const loginUser = userData => dispatch => {
  dispatch({type: LOADING_UI});
  axios
    .post(
      'https://us-central1-meet-peeps.cloudfunctions.net/api/login',
      userData,
    )
    .then(res => {
      setAuthorizationHeader(res.data.token);
      // dispatch(getUserData());
      dispatch({type: SET_AUTHENTICATED});
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      dispatch({type: SET_ERRORS, payload: err.response.data});
    });
};

export const signupUser = newUserData => dispatch => {
  dispatch({type: LOADING_UI});
  axios
    .post(
      'https://us-central1-meet-peeps.cloudfunctions.net/api/signup',
      newUserData,
    )
    .then(res => {
      setAuthorizationHeader(res.data.token);
      // dispatch(getUserData());

      dispatch({type: SET_AUTHENTICATED});
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({type: SET_ERRORS, payload: err.response.data});
    });
};

// All code underneath is from a similar project. Not in use atm
export const logOutUser = () => dispatch => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({type: SET_UNAUTHENTICATED});
};
export const getUserData = () => dispatch => {
  dispatch({type: LOADING_USER});
  axios
    .get('/user')
    .then(res => {
      dispatch({type: SET_USER, payload: res.data});
    })
    .catch(err => console.error(err));
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  AsyncStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export const uploadImage = formData => dispatch => {
  dispatch({type: LOADING_USER});
  axios
    .post('/user/image', formData)
    .then(res => {
      dispatch(getUserData());
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateUserData = newData => dispatch => {
  dispatch({type: LOADING_UI});
  axios
    .post('/user', newData)
    .then(res => {
      dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: {code: err.response.status},
      });
    });
};
