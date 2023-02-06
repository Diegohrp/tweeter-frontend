import React from 'react';
import {SmallProfile} from './SmallProfileImg.styles';
import profileImg from '@images/profile.jpg';
import {Link} from 'react-router-dom';

function SmallProfileImg({image = profileImg}) {
  return (
    <SmallProfile>
      <Link to="/login">
        <img src={image} alt="user image" />
      </Link>
    </SmallProfile>
  );
}

export {SmallProfileImg};
