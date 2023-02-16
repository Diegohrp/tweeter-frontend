import React from 'react';
//styles
import {PostContainer, Retweeted} from './Post.styles';
//containers
import {MakeComment} from '@containers/MakeComment/MakeComment';
import {PostCard} from '@components/Posts/PostCard/PostCard';
import {CommentsList} from '../CommentsList/CommentsList';
import {useObserver} from '../../hooks/useObserver';
import {Link} from 'react-router-dom';
//icons
import {MdOutlineModeComment, MdOutlineCached} from 'react-icons/md';
import {FiHeart, FiBookmark} from 'react-icons/fi';
import {useSelector} from 'react-redux';

function Post(props) {
  //Global state fron redux to get the userId
  const userId = useSelector((state) => state.user.userId);

  //State to show or hide the makeComment component
  const [showComment, setShowComment] = React.useState(false);

  //State to change the word and color in buttons
  const [retweeted, setRetweeted] = React.useState(
    props.whoRetweetedId === userId
  );
  const [liked, setLiked] = React.useState(props.liked);
  const [saved, setSaved] = React.useState(props.saved);

  //Make requests with the DB to add/remove a like, bookmark or retweet
  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleRetweet = () => {
    setRetweeted(!retweeted);
  };

  const toggleBookMark = () => {
    setSaved(!saved);
  };

  //interaction buttons
  const buttons = [
    {icon: MdOutlineModeComment, txt: 'Comment', action: setShowComment},
    {
      icon: MdOutlineCached,
      txt: retweeted ? 'Retweeted' : 'Retweet',
      action: toggleRetweet,
      disabled: props.authorId === userId,
    },
    {icon: FiHeart, txt: liked ? 'Liked' : 'Like', action: toggleLike},
    {icon: FiBookmark, txt: saved ? 'Saved' : 'Save', action: toggleBookMark},
  ];

  //custom hook to use intersection observer and implement a lazy loading
  const {element, show} = useObserver();

  return (
    <>
      {props.whoRetweeted && (
        <Retweeted>
          <Link to="">
            <MdOutlineCached />
            {`${
              props.whoRetweetedId === userId ? 'You' : props.whoRetweeted
            } retweeted`}
          </Link>
        </Retweeted>
      )}
      <PostContainer ref={element}>
        {show && (
          <>
            <PostCard buttons={buttons} {...props} />
            {showComment && <MakeComment />}
            {showComment && <CommentsList />}
          </>
        )}
      </PostContainer>
    </>
  );
}

export {Post};
