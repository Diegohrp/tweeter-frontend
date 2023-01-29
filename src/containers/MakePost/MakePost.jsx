import React from 'react';
//styles
import {
  MakePostContainer,
  UploadImgButton,
  TweetButton,
  PostTextContent,
} from './MakePost.styles';
//icons
import {MdOutlineInsertPhoto, MdPublic} from 'react-icons/md';
//Components
import {PrivacyMenu} from '../../components/PrivacyMenu/PrivacyMenu';
import profileImg from '../../assets/img/profile.jpg';
import {PostTextInput} from '../../components/PostTextInput/PostTextInput';

import {sendPostData} from '../../services/post.service';

//plugin
import {extractHashtagsWithIndices} from '@draft-js-plugins/hashtag';

const privacyIds = {
  Everyone: 1,
  'People you follow': 2,
};

function MakePost() {
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

  //Ref for the Editor component from draft-js in PostTextInput component
  const editorRef = React.useRef(null);
  const focusEditor = () => editorRef.current.focus();

  //To open-close the privacy optons of the post and choose one
  const toogleMenu = () => setMenu(!menu);
  const choosePrivacy = (option) => {
    setPrivacy(option);
    toogleMenu();
  };

  const onChangePostContent = (textContent) => {
    const fakePlaceholder = document.getElementById('post-input-placeholder');
    const tags = extractHashtagsWithIndices(textContent);

    fakePlaceholder.style.visibility = textContent ? 'hidden' : 'visible';
    const hashtagsArray = tags ? tags.map((obj) => obj.hashtag) : [];

    setPostContent(textContent);
    setHashtags(hashtagsArray);
  };

  const previewImg = (e) => {
    //Get an object from the input type file with the following structure
    const file = e.target.files; //{0:File,length:value}
    //Verify if a file has been chosen in the input
    if (file.length > 0) {
      //Select the HTML element img that will show the chosen img
      const preview = document.getElementById('preview-img');

      const fileReader = new FileReader();
      //When an event of uploading is detected, assign the url to the img element
      //e.target.result returns a temporal url with the img data
      fileReader.onload = (e) => (preview.src = e.target.result);
      //file[0] = 0:File, contains the img data
      fileReader.readAsDataURL(file[0]);
      preview.style.display = 'block';
      setImgData(file[0]);
    }
  };

  const makePost = async () => {
    const formData = new FormData();
    formData.append('content', postContent);
    formData.append('user_id', 1);
    formData.append('privacy_id', privacyIds[privacy.txt]);
    formData.append('image', imgData);
    if (hashtags.length > 0) {
      formData.append('hashtags', hashtags);
      console.log(hashtags);
    }
    try {
      const response = await sendPostData(formData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  //Disable/Eneable tweet button
  React.useEffect(() => {
    if ((postContent || imgData) && postContent.length <= 280) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [postContent, imgData]);

  return (
    <MakePostContainer>
      <div>
        <h2>Tweet something</h2>
      </div>
      <div>
        <img src={profileImg} alt="user image" />
        <PostTextContent>
          <label id="post-input-placeholder" onClick={focusEditor}>
            What's happening?
          </label>
          <PostTextInput
            focusEditor={focusEditor}
            editorRef={editorRef}
            onChangePostContent={onChangePostContent}
            postContent={postContent}
          />
        </PostTextContent>
      </div>

      <picture>
        <img id="preview-img" alt="Preview image" />
      </picture>
      <div>
        <UploadImgButton>
          <input
            type="file"
            name="uploadImg"
            id="uploadImg"
            accept="image/*"
            onChange={previewImg}
          />
          <label>
            <MdOutlineInsertPhoto />
          </label>
        </UploadImgButton>
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
  );
}

export {MakePost};
