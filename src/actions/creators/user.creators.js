import {userActionTypes} from '../types/user.types';

export const setUserImgAction = (payload) => ({
  type: userActionTypes.getuserImg,
  payload,
});
