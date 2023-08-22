import React from 'react';
import {MakePost} from '@containers/MakePost/MakePost';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {Main} from './styles';

function Home() {
  return (
    <Main>
      <MakePost />
      <PostsList requestFn={getPosts} />
    </Main>
  );
}

export {Home};
