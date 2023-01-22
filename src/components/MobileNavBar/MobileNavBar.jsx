import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavBar} from './MobileNavBar.styles';

function MobileNavBar({routes, markLink}) {
  return (
    <NavBar>
      {routes.map(({to, Icon}) => (
        <NavLink to={to} key={to} style={markLink}>
          <div>
            <Icon />
          </div>
        </NavLink>
      ))}
    </NavBar>
  );
}

export {MobileNavBar};
