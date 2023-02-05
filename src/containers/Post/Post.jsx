import React from 'react';
//styles
import {PostContainer} from './Post.styles';
//containers
import {MakeComment} from '@containers/MakeComment/MakeComment';
import {PostCard} from '@components/Posts/PostCard/PostCard';
import {CommentsList} from '../CommentsList/CommentsList';

function Post() {
  //State to show or hide the makeComment component
  const [showComment, setShowComment] = React.useState(false);

  return (
    <PostContainer>
      <PostCard showMakeComment={() => setShowComment(!showComment)} />
      {showComment && <MakeComment />}
      {showComment && <CommentsList />}
    </PostContainer>
  );
}

export {Post};
