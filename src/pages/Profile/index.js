import React from 'react';
import {Main} from './styles';

import {Outlet, useLocation} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

const ProfilePage = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export {ProfilePage};
