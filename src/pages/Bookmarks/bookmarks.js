import React from 'react';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';

function Bookmarks({page, route}) {
  return (
    <>
      <PostsList page={page} route={route} requestFn={getPosts} />
    </>
  );
}

export {Bookmarks};
