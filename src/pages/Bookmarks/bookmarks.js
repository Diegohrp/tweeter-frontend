import React from 'react';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';

function Bookmarks() {
  return (
    <>
      <PostsList requestFn={getPosts} />
    </>
  );
}

export {Bookmarks};
