import {userActionTypes} from '../types/user.types';

export const setUserImgAction = (payload) => ({
  type: userActionTypes.getuserImg,
  payload,
});

export const authUserAction = (payload) => ({
  type: userActionTypes.authUser,
  payload,
});

export const logoutUserAction = () => ({
  type: userActionTypes.logoutUser,
});
