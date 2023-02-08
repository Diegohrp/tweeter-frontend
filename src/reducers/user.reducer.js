import {userActionTypes} from '../actions/types/user.types';
import Cookies from 'js-cookie';

const initialState = {
  photo: null,
  isAuth: Cookies.get('token') ? true : false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.getuserImg:
      return {...state, photo: action.payload};
    case userActionTypes.authUser:
      return {...state, isAuth: action.payload};
    case userActionTypes.logoutUser:
      return {...state, photo: null, isAuth: false};
    default:
      return state;
  }
};

export {userReducer};
