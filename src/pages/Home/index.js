import React from 'react';
import {MakePost} from '@containers/MakePost/MakePost';
import {Post} from '@containers/Post/Post';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getHomePosts} from '../../services/post.service';
import {useRequest} from '../../hooks/useRequest';
import {useDispatch} from 'react-redux';
import {setHomePostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '../../components/Request/Loading/Loading';

function Home() {
  const limit = 5;
  const [offset, setOffSet] = React.useState(4);
  const [onS, setOnS] = React.useState(false);

  const {
    state: {loading, response, error},
    getDataReques,
  } = useRequest();

  const dispatch = useDispatch();

  const scroll = async (e) => {
    //innerHeight: device's height
    if (
      e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight &&
      !loading &&
      !onS
    ) {
      setOnS(true);
      console.log('Llego al final');
      await getDataReques(() => getHomePosts(limit, offset));
      console.log('termino getData');
      setOffSet(offset + limit);
    }
  };
  React.useEffect(() => {
    if (response) {
      console.log(response);

      console.log(offset);
      dispatch(setHomePostsAction(response));
      setOnS(false);
    }
  }, [response]);
  return (
    <main style={{overflowY: 'scroll', height: '80vh'}} onScroll={scroll}>
      <MakePost />
      <PostsList requestFn={() => getHomePosts(4, 0)} />

      {loading && (
        <div style={{position: 'relative', margin: '0 auto', width: '40px'}}>
          <Loading />
        </div>
      )}
    </main>
  );
}

export {Home};
