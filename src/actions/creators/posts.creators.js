import {postActionTypes} from '../types/posts.types';

export const setHomePostsAction = (payload) => ({
  type: postActionTypes.sethomePosts,
  payload,
});

export const SetUserPostAction = (payload) => ({
  type: postActionTypes.setUserPost,
  payload,
});

export const cleanPostsAction = () => ({
  type: postActionTypes.cleanPosts,
});
