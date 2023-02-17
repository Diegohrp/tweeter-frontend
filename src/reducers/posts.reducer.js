import {postActionTypes} from '../actions/types/posts.types';

const initialState = {
  home: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActionTypes.sethomePosts:
      return {...state, home: [...state.home, ...action.payload]};
    case postActionTypes.setUserPost:
      return {...state, home: [action.payload, ...state.home]};
    default:
      return state;
  }
};

export {postsReducer};
