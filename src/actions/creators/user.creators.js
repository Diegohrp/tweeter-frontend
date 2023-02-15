import {userActionTypes} from '../types/user.types';

export const setUserBasicInfoAction = (payload) => ({
  type: userActionTypes.setBasicUserInfo,
  payload,
});

export const authUserAction = (payload) => ({
  type: userActionTypes.authUser,
  payload,
});

export const logoutUserAction = () => ({
  type: userActionTypes.logoutUser,
});
