import React from 'react';
import {MenuContainer} from './Menu.styles';
import {Link, useNavigate} from 'react-router-dom';
import {IoPersonCircleSharp} from 'react-icons/io5';
import {MdGroup, MdLogout} from 'react-icons/md';
import Cookies from 'js-cookie';
import {useDispatch} from 'react-redux';
import {logoutUserAction} from '../../../actions/creators/user.creators';
import {cleanPostsAction} from '../../../actions/creators/posts.creators';

import {headersJson, headersMulti} from '../../../services/headers';

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    Cookies.remove('token');
    delete headersJson.headers.Authorization;
    delete headersMulti.headers.Authorization;
    dispatch(cleanPostsAction());
    dispatch(logoutUserAction()); //state.user.isAuth = false
    navigate('/login');
  };

  return (
    <MenuContainer>
      <ul>
        <li>
          <Link to="/home">
            <IoPersonCircleSharp /> My Profile
          </Link>
        </li>
        <li>
          <Link to="/home">
            <MdGroup /> My Followers
          </Link>
        </li>
        <span></span>
        <li>
          <button onClick={logout}>
            <MdLogout /> Logout
          </button>
        </li>
        <li>
          <a target="blank" href="https://www.linkedin.com/in/diego-hp/">
            <p>Developed by </p>
          </a>
        </li>
      </ul>
    </MenuContainer>
  );
}

export {Menu};
