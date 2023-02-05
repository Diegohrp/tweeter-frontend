import React from 'react';
import {MakePost} from '@containers/MakePost/MakePost';
import {Post} from '@containers/Post/Post';

function Home() {
  return (
    <main style={{overflowY: 'scroll', height: '80vh'}}>
      <MakePost />
      <Post />
    </main>
  );
}

export {Home};
