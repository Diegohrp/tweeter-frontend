import React from 'react';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {setPostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '../../components/Request/Loading/Loading';
import {useScrollRequest} from '../../hooks/useScrollRequest';
import {Main} from './styles';

import {Outlet} from 'react-router-dom';

function Bookmarks({page, route}) {
  const {limit, offset, setOffset, loading, onScroll} = useScrollRequest(
    getPosts,
    route,
    page,
    setPostsAction
  );

  return (
    <>
      <Outlet />
      <Main onScroll={onScroll}>
        <PostsList page={page} requestFn={() => getPosts(limit, 0, route)} />
        {loading && (
          <div className="loader">
            <Loading />
          </div>
        )}
      </Main>
    </>
  );
}

export {Bookmarks};
