import React from 'react';
import {CommentPrompt, CommentContainer} from './MakeComment.styles';
import {CommentTextInput} from '@components/Posts/CommentTextInput/CommentTextInput';
import {SmallProfileImg} from '@components/common/SmallProfileImg/SmallProfileImg';

function MakeComment() {
  const editorRef = React.useRef(null);
  const onFocus = () => {
    editorRef.current.focus();
  };
  return (
    <CommentContainer>
      <SmallProfileImg />
      <CommentPrompt>
        <span id="comment-placeholder">Tweet your reply</span>
        <CommentTextInput editorRef={editorRef} onFocus={onFocus} />
      </CommentPrompt>
    </CommentContainer>
  );
}

export {MakeComment};
