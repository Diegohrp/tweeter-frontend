import React from 'react';
//styles
import {
  CommentContainer,
  CommentContentContainer,
  CommentPrompt,
  SendButton,
} from './MakeComment.styles';
//icons
import {FiSend} from 'react-icons/fi';
//components
import {CommentTextInput} from '@components/Comments/CommentTextInput/CommentTextInput';
import {SmallProfileImg} from '@components/common/SmallProfileImg/SmallProfileImg';
import {ImgButton} from '@components/common/ImgButton/ImgButton';
import {ImgPreview} from '@components/common/ImgPreview/ImgPreview';

function MakeComment() {
  //State that stores the content of the comment input
  const [commentContent, setCommentContent] = React.useState('');
  //State for the image
  const [imgData, setImgData] = React.useState(null);
  const imgRef = React.useRef(null);
  //state to enable/disable send button
  const [disabled, setDisabled] = React.useState(true);

  const editorRef = React.useRef(null);
  const onFocus = () => {
    editorRef.current.focus();
  };

  const onChangeComment = (textContent) => {
    const fakeSpan = document.getElementById('comment-placeholder');
    fakeSpan.style.visibility = textContent ? 'hidden' : 'visible';
    setCommentContent(textContent);
  };

  const sendComment = () => {
    const formData = new FormData();
    formData.append('content', commentContent);
    formData.append('image', imgData);
    console.log({commentContent, imgData});
  };

  //Disable/Eneable send button
  React.useEffect(() => {
    if ((commentContent || imgData) && commentContent.length <= 400) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [commentContent, imgData]);

  return (
    <CommentContainer>
      <SmallProfileImg />
      <CommentContentContainer>
        <ImgPreview imgRef={imgRef} setImgData={setImgData} />
        <CommentPrompt>
          <span id="comment-placeholder" onClick={onFocus}>
            Tweet your reply
          </span>
          <CommentTextInput
            editorRef={editorRef}
            onFocus={onFocus}
            onChangeComment={onChangeComment}
          />
          <ImgButton
            style={{marginBottom: '8px'}}
            color="gray"
            setImgData={setImgData}
            imgRef={imgRef}
          />
          <SendButton disabled={disabled} onClick={sendComment}>
            <FiSend />
          </SendButton>
        </CommentPrompt>
      </CommentContentContainer>
    </CommentContainer>
  );
}

export {MakeComment};
