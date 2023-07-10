import React from 'react';
import {NavLink} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {Aside} from './ExploreMenu.styles';

const ExploreMenu = ({pages}) => {
  const theme = useTheme();

  const currentPage = ({isActive}) =>
    isActive
      ? {borderLeft: `3px solid ${theme.brandColor}`}
      : {borderLeft: 'none'};
  return (
    <Aside>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page.name}>
              <NavLink style={currentPage} to={page.path}>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Aside>
  );
};

export {ExploreMenu};
