const API = process.env.API_URL;
const VERSION = process.env.API_VERSION;

const endPoints = {
  users: {
    signup: `${API}/${VERSION}/users/signup`,
  },
  auth: {
    login: `${API}/${VERSION}/auth/login`,
  },
  posts: {
    post: `${API}/${VERSION}/posts`,
  },
};

export {endPoints};
