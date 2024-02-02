import {userActionTypes} from '../actions/types/user.types';
import Cookies from 'js-cookie';

const initialState = {
  userId: null,
  name: null,
  lastName: null,
  photo: null,
  isAuth: Cookies.get('token') ? true : false,

  'explore/people': {users: [], limit: 10, offset: 0, scroll: 0},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.setBasicUserInfo:
      return {...state, ...action.payload}; // payload: {id,name,last_name,photo}
    case userActionTypes.authUser:
      return {...state, isAuth: action.payload};
    case userActionTypes.logoutUser:
      return {...state, ...initialState, isAuth: false};

    case userActionTypes.setExploredUsers:
      return {
        ...state,
        'explore/people': {
          users: [...state['explore/people'].users, ...action.payload.data],
          limit: action.payload.limit,
          offset: action.payload.offset,
          scroll: action.payload.scroll,
        },
      };

    case userActionTypes.cleanUsersFromPage:
      return {
        ...state,
        'explore/people': {
          users: action.payload.data,
          limit: action.payload.limit,
          offset: action.payload.offset,
        },
      };

    case userActionTypes.updateFollow:
      const usersList = [...state['explore/people'].users];
      const index = usersList.findIndex(
        (item) => item.id === action.payload.followingId
      );

      if (index !== -1) {
        usersList[index] = {
          ...usersList[index],
          following: action.payload.following,
          num_followers:
            usersList[index].num_followers + action.payload.numFollowers,
        };

        return {
          ...state,
          'explore/people': {...state['explore/people'], users: [...usersList]},
        };
      }

      return state;

    default:
      return state;
  }
};

export {userReducer};
