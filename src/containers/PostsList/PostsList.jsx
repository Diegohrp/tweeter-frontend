import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRequest} from '../../hooks/useRequest';
import {PostsListContainer} from './PostsList.styles';
import {Post} from '../Post/Post';
import {setHomePostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '@components/Request/Loading/Loading';
import {formatPostDate} from '../../utils/formatDate';

function PostsList({requestFn}) {
  //Global state from redux and dispatcher
  const homePosts = useSelector((state) => state.posts.home);
  const dispatch = useDispatch();
  //Custom hook useRequest, rename response as list
  const {
    state: {loading, response: list, error},
    getDataReques,
  } = useRequest();

  React.useEffect(() => {
    if (!list && homePosts.length === 0) {
      getDataReques(requestFn);
    } else if (list) {
      dispatch(setHomePostsAction(list));
    }
  }, [list]);

  return (
    <>
      <PostsListContainer>
        {loading && <Loading />}
        {!loading &&
          homePosts.map((post) => (
            <Post
              key={`home-post-${post.id}${post?.who_retweeted_id}`}
              postId={post.id}
              authorId={post.user_id}
              author={`${post.name} ${post.last_name}`}
              userPhoto={post.photo}
              date={formatPostDate(post.created_at)}
              textContent={post.content}
              imgContent={post.image}
              numLikes={post.num_likes}
              numComments={post.num_comments}
              numRetweets={post.num_retweets}
              whoRetweeted={post.who_retweeted}
              whoRetweetedId={post.who_retweeted_id}
              liked={post.liked}
              saved={post.saved}
            />
          ))}
      </PostsListContainer>
    </>
  );
}

export {PostsList};
