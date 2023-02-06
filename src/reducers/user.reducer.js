import {userActionTypes} from '../actions/types/user.types';

const initialState = {
  photo: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.getuserImg:
      return {...state, photo: action.payload};
    default:
      return state;
  }
};

export {userReducer};
