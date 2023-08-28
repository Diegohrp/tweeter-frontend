import React from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {ExploreMenu} from '../../components/common/ExploreMenu/ExploreMenu';
import {Main} from '../../styles/Generals/Main';

function ExplorePage() {
  const location = useLocation();
  if (location.pathname === '/explore') {
    return <Navigate to="/explore/top" />;
  }
  const explorePages = [
    {
      name: 'Top',
      path: '/explore/top',
    },
    {
      name: 'Latest',
      path: '/explore/latest',
    },
    {
      name: 'People',
      path: '/explore/people',
    },
    {
      name: 'Media',
      path: '/explore/media',
    },
  ];
  return (
    <Main>
      <ExploreMenu pages={explorePages} />
      <Outlet />
    </Main>
  );
}

export {ExplorePage};
