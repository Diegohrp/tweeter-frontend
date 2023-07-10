import {postActionTypes} from '../actions/types/posts.types';

const initialState = {
  home: {posts: [], limit: 4, offset: 0, scroll: 0},
  'bookmarks/your_tweets': {posts: [], limit: 4, offset: 0, scroll: 0},
  'bookmarks/tweets': {posts: [], limit: 4, offset: 0, scroll: 0},
  bookmarks_likes: {posts: [], limit: 4, offset: 0, scroll: 0},
};

const postsReducer = (state = initialState, action) => {
  let currentPostIndex;
  let newPosts;

  switch (action.type) {
    //Adds posts to the state when the user first loads the page
    //or scrolls until reaches the bottom and a new request is made
    case postActionTypes.setPosts:
      newPosts = [...state[action.payload.page].posts, ...action.payload.data];
      return {
        ...state,
        [action.payload.page]: {
          posts: newPosts,
          limit: action.payload.limit,
          offset: action.payload.offset,
          scroll: state[action.payload.page].scroll,
        },
      };
    //stores a new value of scrollTop for each page
    case postActionTypes.setScroll:
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          scroll: action.payload.scroll,
        },
      };

    //Adds post to the state when the user makes a new post in "home" page.
    case postActionTypes.setUserPost:
      return {
        ...state,
        home: {
          posts: [action.payload.data, ...state.home.posts],
          limit: action.payload.limit,
          offset: action.payload.offset,
        },
      };

    //Cleans all data related to posts when the user logs out
    case postActionTypes.cleanPosts:
      return initialState;

    //Loads the comments from a specific post at the specific page
    case postActionTypes.loadPostComments:
      currentPostIndex = action.payload.currentPostIndex;
      newPosts = [...state[action.payload.page]];

      newPosts[currentPostIndex] = {
        ...newPosts[currentPostIndex],
        comments: [
          ...(newPosts[currentPostIndex].comments || []),
          ...action.payload.comments,
        ],
      };
      return {...state, [action.payload.page]: newPosts};

    //Adds a comment to the specific post at the specific page
    case postActionTypes.setUserComment:
      currentPostIndex = action.payload.currentPostIndex;
      newPosts = [...state[action.payload.page]];
      newPosts[currentPostIndex] = {
        ...newPosts[currentPostIndex],
        comments: [
          action.payload.comment,
          ...newPosts[currentPostIndex].comments,
        ],
      };
      return {...state, [action.payload.page]: newPosts};

    //Adds/removes like from a post coment at a specific page
    case postActionTypes.setLikeComment:
      currentPostIndex = action.payload.postIndex;
      newPosts = [...state[action.payload.page]];
      const comment =
        newPosts[currentPostIndex].comments[action.payload.commentIndex];

      newPosts[currentPostIndex].comments[action.payload.commentIndex] = {
        ...comment,
        num_likes: action.payload.num_likes,
        liked: action.payload.liked,
      };
      return {...state, [action.payload.page]: newPosts};

    default:
      return state;
  }
};

export {postsReducer};
