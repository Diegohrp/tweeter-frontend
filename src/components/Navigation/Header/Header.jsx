import React from 'react';
import {StyledHeader, ProfileSection} from './Header.styles';
import {MdArrowDropDown} from 'react-icons/md';
import logoMobileImg from '@icons/tweeter-small.svg';
import logoDesktopImg from '@icons/tweeter.svg';
import profileImg from '@images/profile.jpg';
import {NavLink} from 'react-router-dom';

const Header = ({toggleMenu, routes, markLink}) => {
  return (
    <StyledHeader>
      <picture>
        <source media="(min-width:900px)" srcSet={logoDesktopImg} />
        <img alt="brand logo" src={logoMobileImg} />
      </picture>

      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.to}>
              <NavLink to={route.to} style={markLink}>
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <ProfileSection>
        <button className="mobile" onClick={toggleMenu}>
          <img src={profileImg} alt="profile image" />
        </button>
        <img src={profileImg} alt="profile image" />
        <p>Xanthe Neal</p>
        <button className="desktop" onClick={toggleMenu}>
          <MdArrowDropDown />
        </button>
      </ProfileSection>
    </StyledHeader>
  );
};

export {Header};
