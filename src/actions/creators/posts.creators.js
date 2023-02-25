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

export const loadPostCommentsAction = (payload) => ({
  type: postActionTypes.loadPostComments,
  payload,
});

export const setUserCommentAction = (payload) => ({
  type: postActionTypes.setUserComment,
  payload,
});
