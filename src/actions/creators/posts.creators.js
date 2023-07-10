import {postActionTypes} from '../types/posts.types';

export const setPostsAction = (payload) => ({
  type: postActionTypes.setPosts,
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

export const setLikeCommentAction = (payload) => ({
  type: postActionTypes.setLikeComment,
  payload,
});

export const setScrollAction = (payload) => ({
  type: postActionTypes.setScroll,
  payload,
});
