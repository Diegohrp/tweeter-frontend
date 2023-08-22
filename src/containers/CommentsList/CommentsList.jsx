import React from 'react';
//styles
import {ListContainer, LoadMoreButton} from './CommentsList.styles';
//components
import {CommentCard} from '../../components/Comments/CommentCard/CommentCard';
import {Loading} from '../../components/Request/Loading/Loading';
//hooks
import {useRequest} from '../../hooks/useRequest';
//redux
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
//actions
import {loadPostCommentsAction} from '../../actions/creators/posts.creators';
//services
import {loadComments} from '../../services/comment.service';
//utils
import {formatPostDate} from '../../utils/formatDate';

function CommentsList({page, postId, retweet, offset, limit, setOffset}) {
  //Custom hook to make requsts
  const {
    state: {loading, response},
    getDataReques,
  } = useRequest();

  //redux useDipatch
  const dispatch = useDispatch();

  //global states from redux
  const posts = useSelector((state) => state.posts[page].posts);
  const currentPostIndex = posts.findIndex(
    (post) => post.id === postId && post.retweet_id === retweet
  );

  const comments = posts[currentPostIndex]?.comments;

  const requestComments = () => {
    getDataReques(() => loadComments(postId, limit, offset));
  };

  React.useEffect(() => {
    if (!comments && !response) {
      requestComments();
    } else if (response) {
      setOffset(offset + limit);
      dispatch(
        loadPostCommentsAction({currentPostIndex, comments: response, page})
      );
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
              page={page}
              postIndex={currentPostIndex}
              id={comment.id}
              author={`${comment.name} ${comment.last_name}`}
              userPhoto={comment.photo}
              content={comment.content}
              image={comment?.image}
              numLikes={comment.num_likes}
              date={formatPostDate(comment.created_at)}
              liked={comment?.liked}
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
