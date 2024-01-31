import React from 'react';
import {Main} from './styles';

import {Outlet, useLocation} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();

  if (
    location.pathname === '/profile/:userId' ||
    location.pathname === '/profile'
  ) {
    return <Navigate to="*" />;
  }

  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export {ProfilePage};
