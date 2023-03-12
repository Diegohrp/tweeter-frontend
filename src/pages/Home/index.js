import React from 'react';
import {MakePost} from '@containers/MakePost/MakePost';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {setPostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '../../components/Request/Loading/Loading';
import {useScrollRequest} from '../../hooks/useScrollRequest';
import {Main} from './styles';
import {pages} from '../pages';

function Home() {
  const {limit, offset, setOffset, loading, onScroll} = useScrollRequest(
    getPosts,
    setPostsAction
  );

  return (
    <Main onScroll={onScroll}>
      <MakePost offset={offset} setOffset={setOffset} />
      <PostsList
        page={pages.home}
        requestFn={() => getPosts(limit, 0, pages.home)}
      />
      {loading && (
        <div className="loader">
          <Loading />
        </div>
      )}
    </Main>
  );
}

export {Home};
