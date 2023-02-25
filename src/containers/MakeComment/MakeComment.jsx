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
import {Loading} from '../../components/Request/Loading/Loading';

import {useSelector} from 'react-redux';
//hooks
import {useRequest} from '../../hooks/useRequest';
//services
import {makeComment} from '../../services/comment.service';

function MakeComment({postId}) {
  //Global style from redux to get the user profile photo
  const userPhoto = useSelector((state) => state.user.photo);

  const {
    state: {loading, response},
    sendDataRequest,
  } = useRequest();

  //State that stores the content of the comment input
  const [commentContent, setCommentContent] = React.useState('');

  //State for the image
  const [imgData, setImgData] = React.useState(null);
  const imgRef = React.useRef(null);

  //state to enable/disable send button
  const [disabled, setDisabled] = React.useState(true);

  //Ref for the placeholder
  const fakePlaceholder = React.useRef(null);

  const editorRef = React.useRef(null);
  const onFocus = () => {
    editorRef.current.focus();
  };

  //state to tell the editor to clean the data
  const [cleanTxt, setCleanTxt] = React.useState(false);

  const onChangeComment = (textContent) => {
    fakePlaceholder.current.style.visibility = textContent
      ? 'hidden'
      : 'visible';
    setCommentContent(textContent);
  };

  const cleanComment = () => {
    fakePlaceholder.current.style.visibility = 'visible';
    setCommentContent('');
    setImgData(null);
    imgRef.current.style.display = 'none';
    imgRef.current.src = '';
    setCleanTxt(!cleanTxt);
  };

  const sendComment = (e) => {
    const formData = new FormData();
    formData.append('post_id', postId);
    formData.append('content', commentContent);
    formData.append('image', imgData);
    console.log({commentContent, imgData});
    sendDataRequest(makeComment, formData);
    cleanComment();
  };

  //Disable/Eneable send button
  React.useEffect(() => {
    if ((commentContent || imgData) && commentContent.length <= 400) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [commentContent, imgData]);

  React.useEffect(() => {
    /* console.log(response); */
  }, [response]);

  return (
    <CommentContainer>
      {loading && <Loading />}
      <SmallProfileImg image={userPhoto} />
      <CommentContentContainer>
        <CommentPrompt>
          <span
            id="comment-placeholder"
            ref={fakePlaceholder}
            onClick={onFocus}>
            Tweet your reply
          </span>
          <CommentTextInput
            editorRef={editorRef}
            onFocus={onFocus}
            onChangeComment={onChangeComment}
            cleanTxt={cleanTxt}
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
        <ImgPreview imgRef={imgRef} setImgData={setImgData} />
      </CommentContentContainer>
    </CommentContainer>
  );
}

export {MakeComment};
