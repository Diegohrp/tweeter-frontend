import React from 'react';
import {FButton} from './FollowButton.styles';
import {IoMdPersonAdd} from 'react-icons/io';
import {followUser} from '../../services/user.service';
import {useDispatch} from 'react-redux';
import {updateFollowAction} from '../../actions/creators/user.creators';
import {useLocation} from 'react-router-dom';

const FollowButton = ({
  followingId,
  following,
  style = {},
  setFollowing = null,
}) => {
  const dispatch = useDispatch();

  const toggleFollow = async () => {
    await followUser({followingId});
    //updates the state from a profile
    if (setFollowing) {
      setFollowing(!following);
    }
    //updates the state from explore/users page
    dispatch(
      updateFollowAction({
        followingId,
        following: !following,
        numFollowers: following ? -1 : 1,
      })
    );
  };

  return (
    <FButton style={style} type="button" onClick={toggleFollow}>
      {!following && (
        <>
          <IoMdPersonAdd />
          Follow
        </>
      )}
      {following && 'Following'}
    </FButton>
  );
};

export {FollowButton};
