import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRequest} from '../../hooks/useRequest';
import {PostsListContainer} from './PostsList.styles';
import {Post} from '../Post/Post';
import {setPostsAction} from '../../actions/creators/posts.creators';
import {Loading} from '@components/Request/Loading/Loading';
import {formatPostDate} from '../../utils/formatDate';
import {useLocation} from 'react-router-dom';

function PostsList({requestFn}) {
  const location = useLocation();
  //removes the "/" from the pathname of the current location
  //page is part of a backend endpoint route
  //page is also used as a key for redux states
  const page = location.pathname.slice(1);

  //Global state from redux and dispatcher
  const offset = useSelector((state) => state.posts[page].offset);
  const limit = useSelector((state) => state.posts[page].limit);
  const homePosts = useSelector((state) => state.posts[page].posts);

  const dispatch = useDispatch();

  //Custom hook useRequest, rename response as list
  const {
    state: {loading, response: list, error},
    reset,
    getDataReques,
  } = useRequest();

  const makeFirstRequest = async () => {
    //It's the first time the componet renders, makes a request to get the posts.
    if (!list && !homePosts.length) {
      await getDataReques(() => requestFn(limit, offset, page));
    } else if (list && !homePosts.length) {
      dispatch(
        setPostsAction({
          data: list,
          page,
          limit,
          offset: offset + limit,
          scroll: 0,
        })
      );
    }
  };

  React.useEffect(() => {
    //When the user navigate to another page that belongs to the same branch
    //cleans the previous data in the state from useRequest
    reset();
  }, [page]);

  React.useEffect(() => {
    makeFirstRequest();
  }, [list]);

  return (
    <PostsListContainer>
      {loading && <Loading />}
      {!loading &&
        homePosts.map((post, index) => (
          <Post
            key={`home-${post.who_retweeted ? 'retweet' : 'post'}-${post.id}${
              post?.who_retweeted_id
            }`}
            postIndex={index}
            page={page}
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
            retweetId={post.retweet_id}
            whoRetweeted={post.who_retweeted}
            whoRetweetedId={post.who_retweeted_id}
            liked={post.liked}
            saved={post.saved}
          />
        ))}
    </PostsListContainer>
  );
}

export {PostsList};
