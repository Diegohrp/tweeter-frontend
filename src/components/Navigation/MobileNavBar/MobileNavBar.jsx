import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavBar} from './MobileNavBar.styles';

const MobileNavBar = ({routes, markLink, setScroll}) => {
  return (
    <NavBar>
      {routes.map(({to, Icon}) => (
        <NavLink onClick={setScroll} to={to} key={to} style={markLink}>
          <div>
            <Icon />
          </div>
        </NavLink>
      ))}
    </NavBar>
  );
};

export {MobileNavBar};
