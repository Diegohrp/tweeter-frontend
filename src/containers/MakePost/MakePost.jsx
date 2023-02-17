import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
//styles
import {
  MakePostContainer,
  TweetButton,
  PostTextContent,
} from './MakePost.styles';
//icons
import {MdPublic} from 'react-icons/md';
//Components
import {PrivacyMenu} from '@components/Posts/PrivacyMenu/PrivacyMenu';
import {PostTextInput} from '@components/Posts/PostTextInput/PostTextInput';
import {ImgButton} from '@components/common/ImgButton/ImgButton';
import {ImgPreview} from '@components/common/ImgPreview/ImgPreview';
import {SmallProfileImg} from '@components/common/SmallProfileImg/SmallProfileImg';
import {Loading} from '@components/Request/Loading/Loading';
//services
import {sendPostData} from '@services/post.service';
//plugin
import {extractHashtagsWithIndices} from '@draft-js-plugins/hashtag';
import {SetUserPostAction} from '../../actions/creators/posts.creators';
import {useRequest} from '../../hooks/useRequest';

const privacyIds = {
  Everyone: 1,
  'People you follow': 2,
};

function MakePost({offset, setOffset}) {
  //user photo image from redux
  const userPhoto = useSelector((state) => state.user.photo);
  //userId from redux
  const userId = useSelector((state) => state.user.userId);
  const userName = useSelector((state) => state.user.name);
  const userLastName = useSelector((state) => state.user.lastName);

  const {
    state: {loading, response, error},
    sendDataRequest,
  } = useRequest();

  const dispatch = useDispatch();

  //States for the tweet data
  const [postContent, setPostContent] = React.useState('');
  const [imgData, setImgData] = React.useState(null);
  const [hashtags, setHashtags] = React.useState([]);
  const [privacy, setPrivacy] = React.useState({
    Icon: MdPublic,
    txt: 'Everyone',
  });

  //State for privacy menu
  const [menu, setMenu] = React.useState(false);
  //state for tweet button
  const [disabled, setDisabled] = React.useState(true);

  //Ref for the ImgPreview component
  const previewImg = React.useRef(null);
  //Ref for the placeholder
  const fakePlaceholder = React.useRef(null);

  //Ref for the Editor component from draft-js in PostTextInput component
  const editorRef = React.useRef(null);
  const focusEditor = () => editorRef.current.focus();

  const [cleanTxt, setCleanTxt] = React.useState(false);
  const cleanTweet = () => {
    //Show placeholder
    fakePlaceholder.current.style.visibility = 'visible';
    //Clean textContent from editor
    setPostContent('');
    setCleanTxt(!cleanTxt);
    //Clean img data and hide previewImg
    previewImg.current.style.display = 'none';
    previewImg.current.src = '';
    setImgData(null);
    //Hashtags and privacy to default values
    setHashtags([]);
    setPrivacy({
      Icon: MdPublic,
      txt: 'Everyone',
    });
  };

  //To open-close the privacy optons of the post and choose one
  const toogleMenu = () => setMenu(!menu);
  const choosePrivacy = (option) => {
    setPrivacy(option);
    toogleMenu();
  };

  const onChangePostContent = (textContent) => {
    const tags = extractHashtagsWithIndices(textContent);
    fakePlaceholder.current.style.visibility = textContent
      ? 'hidden'
      : 'visible';
    const hashtagsArray = tags ? tags.map((obj) => obj.hashtag) : [];

    setPostContent(textContent);
    setHashtags(hashtagsArray);
  };

  const makePost = async () => {
    const formData = new FormData();
    formData.append('content', postContent);
    formData.append('user_id', userId);
    formData.append('privacy_id', privacyIds[privacy.txt]);
    formData.append('image', imgData);
    if (hashtags.length > 0) {
      formData.append('hashtags', hashtags);
    }
    await sendDataRequest(sendPostData, formData);
  };

  //Disable/Eneable tweet button
  React.useEffect(() => {
    if ((postContent || imgData) && postContent.length <= 280) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [postContent, imgData]);

  //Add the current post to the state in redux
  React.useEffect(() => {
    if (response) {
      dispatch(
        SetUserPostAction({
          id: response.insertId,
          name: userName,
          last_name: userLastName,
          photo: userPhoto,
          created_at: 'Just now',
          content: response.content,
          num_likes: 0,
          num_comments: 0,
          num_retweets: 0,
          privacy_id: response.privacy_id,
          image: response?.image,
        })
      );
      cleanTweet();
      setOffset(offset + 1);
    }
  }, [response]);

  return (
    <>
      <MakePostContainer>
        {loading && <Loading />}
        <div className="title">
          <h2>Tweet something</h2>
        </div>
        <div className="post-content">
          <SmallProfileImg image={userPhoto} />
          <PostTextContent>
            <span
              id="post-input-placeholder"
              ref={fakePlaceholder}
              onClick={focusEditor}>
              What's happening?
            </span>
            <PostTextInput
              focusEditor={focusEditor}
              editorRef={editorRef}
              onChangePostContent={onChangePostContent}
              postContent={postContent}
              cleanValue={cleanTxt}
            />
          </PostTextContent>
        </div>

        <ImgPreview setImgData={setImgData} imgRef={previewImg} />

        <div className="buttons">
          <ImgButton
            color="brand"
            setImgData={setImgData}
            imgRef={previewImg}
          />
          <button onClick={toogleMenu}>
            <privacy.Icon />
            {privacy.txt}
          </button>
        </div>
        {menu && <PrivacyMenu choosePrivacy={choosePrivacy} />}

        <TweetButton id="tweet-button" onClick={makePost} disabled={disabled}>
          Tweet
        </TweetButton>
      </MakePostContainer>
    </>
  );
}

export {MakePost};
