import React from 'react';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {setPostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '../../components/Request/Loading/Loading';
import {useScrollRequest} from '../../hooks/useScrollRequest';
import {Main} from './styles';
import {pages} from '../pages';

function Bookmarks() {
  const {limit, offset, setOffset, loading, onScroll} = useScrollRequest(
    getPosts,
    setPostsAction
  );

  return (
    <Main onScroll={onScroll}>
      <h2>Bookmarks</h2>

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

export {Bookmarks};
