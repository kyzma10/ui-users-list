import {
  ACTIVE_USER, FIND_SMTH_SUCCESS,
  USERS_REQUEST,
  USERS_REQUEST_FAILURE,
  USERS_REQUEST_SUCCESS
} from "../types/usersTypes";

const initialState = {
  isLoading: false,
  users: [],
  activeUser: null,
  errors: null
};

export default function(state = initialState, action) {

  switch (action.type) {

    case USERS_REQUEST:
      return {...state, isLoading: true};

    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        activeUser: action.payload.data[0]
      };

    case USERS_REQUEST_FAILURE:
      return {...state, errors: {error: 'User list not found'}};

    case ACTIVE_USER:
      return {...state, activeUser: state.users[action.payload]};

    case FIND_SMTH_SUCCESS:
      let newActiveUser = action.payload.length > 0 ? action.payload[0] : null;
      return {...state, users: action.payload, activeUser: newActiveUser};

    default:
      return state;
  }
}