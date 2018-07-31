import axios from 'axios';
import {
  ACTIVE_USER, FIND_SMTH_FAILURE,
  FIND_SMTH_SUCCESS,
  USERS_REQUEST,
  USERS_REQUEST_FAILURE,
  USERS_REQUEST_SUCCESS
} from "../types/usersTypes";

import findWord from "../utils/helper";

const getUsersList = () => dispatch => {
  dispatch({type: USERS_REQUEST});

  axios({
    url: './data/clients.json',
    method: 'get'
  })
    .then(response => dispatch({
      type: USERS_REQUEST_SUCCESS,
      payload: response
    }))

    .catch(error => dispatch({
      type: USERS_REQUEST_FAILURE
    }))
};

const getActiveUser = (id) => dispatch => {
  dispatch({
    type: ACTIVE_USER,
    payload: id
  })
};

const findSmthField = (word) => dispatch => {

  axios({
    url: './data/clients.json',
    method: 'get'
  })
    .then(response => dispatch({
      type: FIND_SMTH_SUCCESS,
      payload: response.data.filter(user => findWord(user, word) === true)
    }))

    .catch(error => dispatch({
      type: FIND_SMTH_FAILURE
    }))

};

export {
  getUsersList,
  getActiveUser,
  findSmthField
}