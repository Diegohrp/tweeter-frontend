const API = process.env.API_URL;
const VERSION = process.env.API_VERSION;

const endPoints = {
  users: {
    signup: `${API}/${VERSION}/users/signup`,
    basicInfo: `${API}/${VERSION}/users/basic-info`,
  },
  auth: {
    login: `${API}/${VERSION}/auth/login`,
  },
  posts: {
    post: `${API}/${VERSION}/posts`,
    getPosts: (limit, offset, route, filter) =>
      `${API}/${VERSION}/posts/${route}${
        filter ? filter + '&' : '?'
      }limit=${limit}&offset=${offset}`,
    likePost: `${API}/${VERSION}/posts/like-post`,
    retweet: `${API}/${VERSION}/posts/retweets`,
    bookmarks: `${API}/${VERSION}/posts/bookmarks`,
  },
  comments: {
    makeComment: `${API}/${VERSION}/comments`,
    loadComments: (postId, limit, offset) =>
      `${API}/${VERSION}/comments/${postId}?limit=${limit}&offset=${offset}`,
    likeComment: `${API}/${VERSION}/comments/like-comment`,
  },
};

export {endPoints};
