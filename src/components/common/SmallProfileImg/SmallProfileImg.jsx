import React from 'react';
import {SmallProfile} from './SmallProfileImg.styles';
import profileImg from '@images/profile.jpg';
import {Link} from 'react-router-dom';
import {useRequest} from '../../../hooks/useRequest';
import {getProfilePhoto} from '../../../services/user.service';
import Cookies from 'js-cookie';
function SmallProfileImg() {
  const {
    state: {loading, error, response},
    getDataReques,
    closeErrorModal,
  } = useRequest();

  React.useEffect(() => {
    /* getProfilePhoto(); */
    console.log(Cookies.get('token'));
  }, []);

  if (true) {
    return (
      <SmallProfile>
        <Link to="/login">
          <img src={profileImg} alt="user image" />
        </Link>
      </SmallProfile>
    );
  }
}

export {SmallProfileImg};
