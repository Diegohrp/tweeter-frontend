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

function CommentsList({postId}) {
  const {
    state: {loading, response},
    getDataReques,
  } = useRequest();

  const dispatch = useDispatch();

  const homePosts = useSelector((state) => state.posts.home);
  const currentPostId = homePosts.findIndex((post) => post.id === postId);
  const comments = homePosts[currentPostId]?.comments;

  React.useEffect(() => {
    if (!comments && !response) {
      getDataReques(() => loadComments(postId, 4, 0));
    } else if (response) {
      dispatch(loadPostCommentsAction({postId, comments: response}));
    }
  }, [response]);

  return (
    <>
      {loading && <Loading />}
      {!loading && comments && comments?.length > 0 && (
        <ListContainer className="COSA">
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

          <LoadMoreButton>Load more comments</LoadMoreButton>
        </ListContainer>
      )}
    </>
  );
}

export {CommentsList};
