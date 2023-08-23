import {postActionTypes} from '../../actions/types/posts.types';
import {
  setNewPostsList,
  loadComments,
  addComment,
  addLikeToComment,
} from './cases';

const initialStatePosts = {posts: [], limit: 4, offset: 0, scroll: 0};

const initialState = {
  home: initialStatePosts,
  'bookmarks/your_tweets': initialStatePosts,
  'bookmarks/tweets': initialStatePosts,
  'bookmarks/likes': initialStatePosts,
};

const postsReducer = (state = initialState, action) => {
  let currentPostIndex;
  let newPosts;

  switch (action.type) {
    //Adds posts to the state when the user first loads the page
    //or scrolls until reaches the bottom and a new request is made
    case postActionTypes.setPosts:
      return setNewPostsList(state, action.payload);

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
      return loadComments(state, action.payload);

    //Adds a comment to the specific post at the specific page
    case postActionTypes.setUserComment:
      return addComment(state, action.payload);

    //Adds/removes like from a post coment at a specific page
    case postActionTypes.setLikeComment:
      return addLikeToComment(state, action.payload);
    /* currentPostIndex = action.payload.postIndex;
      newPosts = [...state[action.payload.page]];
      const comment =
        newPosts[currentPostIndex].comments[action.payload.commentIndex];

      newPosts[currentPostIndex].comments[action.payload.commentIndex] = {
        ...comment,
        num_likes: action.payload.num_likes,
        liked: action.payload.liked,
      };
      return {...state, [action.payload.page]: newPosts}; */

    default:
      return state;
  }
};

export {postsReducer};