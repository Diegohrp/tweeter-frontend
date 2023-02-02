import React from 'react';
import {MenuContainer} from './Menu.styles';
import {Link} from 'react-router-dom';
import {IoPersonCircleSharp} from 'react-icons/io5';
import {MdGroup, MdLogout} from 'react-icons/md';

const Menu = () => {
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
          <button>
            <MdLogout /> Logout
          </button>
        </li>
      </ul>
    </MenuContainer>
  );
};

export {Menu};
