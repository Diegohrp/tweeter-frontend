import React from 'react';
import {SmallProfile} from './SmallProfileImg.styles';
import profileImg from '@images/profile-default.svg';
import {Link} from 'react-router-dom';

function SmallProfileImg({image}) {
  return (
    <SmallProfile>
      <Link to="/login">
        <img src={image || profileImg} alt="user image" />
      </Link>
    </SmallProfile>
  );
}

export {SmallProfileImg};
