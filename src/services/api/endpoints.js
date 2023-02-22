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
    getHome: (limit, offset) =>
      `${API}/${VERSION}/posts/home?limit=${limit}&offset=${offset}`,
    likePost: `${API}/${VERSION}/posts/like-post`,
    retweet: `${API}/${VERSION}/posts/retweets`,
    bookmarks: `${API}/${VERSION}/posts/bookmarks`,
  },
};

export {endPoints};
