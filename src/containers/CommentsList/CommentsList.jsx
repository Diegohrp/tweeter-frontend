import React from 'react';
import {ListContainer} from './CommentsList.styles';
import {CommentCard} from '../../components/Comments/CommentCard/CommentCard';

function CommentsList() {
  return (
    <ListContainer>
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </ListContainer>
  );
}

export {CommentsList};
