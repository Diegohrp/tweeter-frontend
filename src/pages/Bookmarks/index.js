import React from 'react';
import {Outlet} from 'react-router-dom';
import {ExploreMenu} from '../../components/common/ExploreMenu/ExploreMenu';
import {Main} from './styles';

function BookmarksPage() {
  const bookmarksPages = [
    {
      name: 'Your tweets',
      page: 'bookmarks_your_tweets',
      path: '/bookmarks/your_tweets',
    },
    {
      name: 'Tweets',
      page: 'bookmarks_tweets',
      path: '/bookmarks/tweets',
    },
    {
      name: 'Likes',
      page: 'bookmarks_likes',
      path: '/bookmarks/likes',
    },
  ];
  return (
    <Main>
      <ExploreMenu pages={bookmarksPages} />
      <Outlet />
    </Main>
  );
}

export {BookmarksPage};
