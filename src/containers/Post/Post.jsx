import React from 'react';
//styles
import {PostContainer} from './Post.styles';
//containers
import {MakeComment} from '@containers/MakeComment/MakeComment';
import {PostCard} from '@components/Posts/PostCard/PostCard';
import {CommentsList} from '../CommentsList/CommentsList';
import {useObserver} from '../../hooks/useObserver';
/*
  props:{
    author,
    userPhoto,
    date,
    textContent,
    imgContent,
    numLikes,
    numComments,
    numRetweets,
  }
 */
function Post(props) {
  //State to show or hide the makeComment component
  const [showComment, setShowComment] = React.useState(false);

  //custom hook to use intersection observer and implement a lazy loading
  const {element, show} = useObserver();

  return (
    <PostContainer ref={element}>
      {show && (
        <>
          <PostCard
            showMakeComment={() => setShowComment(!showComment)}
            {...props}
          />
          {showComment && <MakeComment />}
          {showComment && <CommentsList />}
        </>
      )}
    </PostContainer>
  );
}

export {Post};
