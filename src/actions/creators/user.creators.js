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

export const setExploredUsersAction = (payload) => ({
  type: userActionTypes.setExploredUsers,
  payload,
});

export const cleanUsersFromPage = (payload) => ({
  type: userActionTypes.cleanUsersFromPage,
  payload,
});

export const updateFollowAction = (payload) => ({
  type: userActionTypes.updateFollow,
  payload,
});
