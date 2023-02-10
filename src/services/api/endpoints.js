const API = process.env.API_URL;
const VERSION = process.env.API_VERSION;

const endPoints = {
  users: {
    signup: `${API}/${VERSION}/users/signup`,
    photo: `${API}/${VERSION}/users/photo`,
  },
  auth: {
    login: `${API}/${VERSION}/auth/login`,
  },
  posts: {
    post: `${API}/${VERSION}/posts`,
    getHome: (limit, offset) =>
      `${API}/${VERSION}/posts/home?limit=${limit}&offset=${offset}`,
  },
};

export {endPoints};
