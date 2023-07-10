import React from 'react';
import {MakePost} from '@containers/MakePost/MakePost';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {setPostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '../../components/Request/Loading/Loading';
import {useScrollRequest} from '../../hooks/useScrollRequest';
import {Main} from './styles';
import {pages} from '../pages';

function Home({page, route}) {
  /*const {limit, offset, setOffset, loading, onScroll} = useScrollRequest(
    getPosts,
    route,
    page,
    setPostsAction
  );*/

  return (
    <Main>
      <MakePost />
      <PostsList page={page} route={route} requestFn={getPosts} />
      {/*loading && (
        <div className="loader">
          <Loading />
        </div>
      )*/}
    </Main>
  );
}

export {Home};
