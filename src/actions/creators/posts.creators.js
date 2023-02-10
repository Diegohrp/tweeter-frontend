import {postActionTypes} from '../types/posts.types';

export const setHomePostsAction = (payload) => ({
  type: postActionTypes.sethomePosts,
  payload,
});
