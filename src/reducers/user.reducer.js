import {userActionTypes} from '../actions/types/user.types';
import Cookies from 'js-cookie';

const initialState = {
  userId: null,
  name: null,
  lastName: null,
  photo: null,
  isAuth: Cookies.get('token') ? true : false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.setBasicUserInfo:
      return {...state, ...action.payload}; // payload: {id,name,last_name,photo}
    case userActionTypes.authUser:
      return {...state, isAuth: action.payload};
    case userActionTypes.logoutUser:
      return {...state, ...initialState};
    default:
      return state;
  }
};

export {userReducer};
