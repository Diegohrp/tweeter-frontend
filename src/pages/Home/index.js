import React from 'react';
import {MakePost} from '../../containers/MakePost/MakePost';
import {PostCard} from '../../components/Posts/PostCard/PostCard';
function Home() {
  return (
    <main style={{overflowY: 'scroll', height: '80vh'}}>
      <MakePost />
      <PostCard />
    </main>
  );
}

export {Home};
