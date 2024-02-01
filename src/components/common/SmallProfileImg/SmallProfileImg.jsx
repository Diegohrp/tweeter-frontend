import React from 'react';
import {SmallProfile} from './SmallProfileImg.styles';
import profileImg from '@images/profile-default.svg';
import {Link} from 'react-router-dom';

function SmallProfileImg({image, userId}) {
  return (
    <SmallProfile>
      <Link to={`/profile/tweets/${userId}`}>
        <img src={image || profileImg} alt="user image" />
      </Link>
    </SmallProfile>
  );
}

export {SmallProfileImg};
