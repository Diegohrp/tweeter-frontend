import React from 'react';
import {MakePost} from '@containers/MakePost/MakePost';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getHomePosts} from '../../services/post.service';
import {setHomePostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '../../components/Request/Loading/Loading';
import {useScrollRequest} from '../../hooks/useScrollRequest';
import {Main} from './styles';

function Home() {
  const {limit, offset, setOffset, loading, onScroll} = useScrollRequest(
    getHomePosts,
    setHomePostsAction
  );

  return (
    <Main onScroll={onScroll}>
      <MakePost offset={offset} setOffset={setOffset} />
      <PostsList requestFn={() => getHomePosts(limit, 0)} />
      {loading && (
        <div className="loader">
          <Loading />
        </div>
      )}
    </Main>
  );
}

export {Home};
