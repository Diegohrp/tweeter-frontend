import React from 'react';
import {MenuContainer} from './Menu.styles';
import {Link, useNavigate} from 'react-router-dom';
import {IoPersonCircleSharp} from 'react-icons/io5';
import {MdGroup, MdLogout} from 'react-icons/md';
import Cookies from 'js-cookie';
import {useDispatch} from 'react-redux';
import {logoutUserAction} from '../../../actions/creators/user.creators';

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove('token');
    dispatch(logoutUserAction()); //state.user.isAuth = false
    navigate('/login');
  };

  return (
    <MenuContainer>
      <ul>
        <li>
          <Link to="/login">
            <IoPersonCircleSharp /> My Profile
          </Link>
        </li>
        <li>
          <Link to="/login">
            <MdGroup /> My Followers
          </Link>
        </li>
        <span></span>
        <li>
          <button onClick={logout}>
            <MdLogout /> Logout
          </button>
        </li>
      </ul>
    </MenuContainer>
  );
}

export {Menu};
