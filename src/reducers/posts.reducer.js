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
    case postActionTypes.cleanPosts:
      return initialState;
    case postActionTypes.loadPostComments:
      const currentPostId = state.home.findIndex(
        (post) => post.id === action.payload.postId
      );
      const newHomePosts = [...state.home];
      newHomePosts[currentPostId] = {
        ...newHomePosts[currentPostId],
        comments: action.payload.comments,
      };
      return {...state, home: newHomePosts};

    default:
      return state;
  }
};

export {postsReducer};
