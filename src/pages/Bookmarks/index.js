import React from 'react';
import {Outlet} from 'react-router-dom';
import {ExploreMenu} from '../../components/common/ExploreMenu/ExploreMenu';
import {Main} from '../../styles/Generals/Main';
import {useLocation, Navigate} from 'react-router-dom';

function BookmarksPage() {
  const location = useLocation();
  if (location.pathname === '/bookmarks') {
    return <Navigate to="/bookmarks/your_tweets" />;
  }
  const bookmarksPages = [
    {
      name: 'Your tweets',
      path: '/bookmarks/your_tweets',
    },
    {
      name: 'Tweets',
      path: '/bookmarks/tweets',
    },
    {
      name: 'Likes',
      path: '/bookmarks/likes',
    },
  ];

  if (location.pathname !== '/bookmarks') {
    return (
      <Main>
        <ExploreMenu pages={bookmarksPages} />
        <Outlet />
      </Main>
    );
  }
}

export {BookmarksPage};
