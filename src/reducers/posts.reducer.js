import {postActionTypes} from '../actions/types/posts.types';

const initialState = {
  home: [],
};

const postsReducer = (state = initialState, action) => {
  let currentPostIndex;
  let newHomePosts;

  switch (action.type) {
    case postActionTypes.sethomePosts:
      return {...state, home: [...state.home, ...action.payload]};

    case postActionTypes.setUserPost:
      return {...state, home: [action.payload, ...state.home]};

    case postActionTypes.cleanPosts:
      return initialState;

    case postActionTypes.loadPostComments:
      currentPostIndex = action.payload.currentPostIndex;
      newHomePosts = [...state.home];

      newHomePosts[currentPostIndex] = {
        ...newHomePosts[currentPostIndex],
        comments: [
          ...(newHomePosts[currentPostIndex].comments || []),
          ...action.payload.comments,
        ],
      };
      return {...state, home: newHomePosts};

    case postActionTypes.setUserComment:
      currentPostIndex = action.payload.currentPostIndex;
      newHomePosts = [...state.home];
      newHomePosts[currentPostIndex] = {
        ...newHomePosts[currentPostIndex],
        comments: [
          action.payload.comment,
          ...newHomePosts[currentPostIndex].comments,
        ],
      };
      return {...state, home: newHomePosts};

    case postActionTypes.setLikeComment:
      currentPostIndex = action.payload.postIndex;
      newHomePosts = [...state.home];
      const comment =
        newHomePosts[currentPostIndex].comments[action.payload.commentIndex];
      console.log(comment);
      newHomePosts[currentPostIndex].comments[action.payload.commentIndex] = {
        ...comment,
        num_likes: action.payload.num_likes,
        liked: action.payload.liked,
      };
      return {...state, home: newHomePosts};
    default:
      return state;
  }
};

export {postsReducer};
