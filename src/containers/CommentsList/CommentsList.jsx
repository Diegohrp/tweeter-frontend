import React from 'react';
import {ListContainer, LoadMoreButton} from './CommentsList.styles';
import {CommentCard} from '../../components/Comments/CommentCard/CommentCard';

import {useRequest} from '../../hooks/useRequest';

import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {loadPostCommentsAction} from '../../actions/creators/posts.creators';
import {loadComments} from '../../services/comment.service';
import {Loading} from '../../components/Request/Loading/Loading';

import {formatPostDate} from '../../utils/formatDate';

function CommentsList({postId, retweet, offset, limit, setOffset}) {
  /* console.log(retweet); */
  //Custom hook to make requsts
  const {
    state: {loading, response},
    getDataReques,
  } = useRequest();

  //redux useDipatch
  const dispatch = useDispatch();

  //global states from redux
  const homePosts = useSelector((state) => state.posts.home);
  const currentPostIndex = homePosts.findIndex(
    (post) => post.id === postId && post.retweet_id === retweet
  );

  const comments = homePosts[currentPostIndex]?.comments;

  //limit and offset for the request

  const requestComments = () => {
    getDataReques(() => loadComments(postId, limit, offset));
  };

  React.useEffect(() => {
    if (!comments && !response) {
      requestComments();
    } else if (response) {
      setOffset(offset + limit);
      dispatch(loadPostCommentsAction({currentPostIndex, comments: response}));
    }
  }, [response]);

  return (
    <>
      {loading && <Loading />}
      {comments && comments?.length > 0 && (
        <ListContainer>
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              author={`${comment.name} ${comment.last_name}`}
              userPhoto={comment.photo}
              content={comment.content}
              image={comment?.image}
              numLikes={comment.num_likes}
              date={formatPostDate(comment.created_at)}
            />
          ))}

          {(response?.length > 0 || response === null) && (
            <LoadMoreButton onClick={requestComments}>
              Load more comments
            </LoadMoreButton>
          )}
        </ListContainer>
      )}
    </>
  );
}

export {CommentsList};
