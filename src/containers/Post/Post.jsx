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
import {MdOutlineCached} from 'react-icons/md';
import Cookies from 'js-cookie';
import {useSelector} from 'react-redux';
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

  //Global state fron redux to get the userId
  const userId = useSelector((state) => state.user.userId);

  return (
    <>
      {props.who_retweeted && (
        <Retweeted>
          <Link to="">
            <MdOutlineCached />
            {`${
              props.who_retweeted_id === userId ? 'You' : props.who_retweeted
            } retweeted`}
          </Link>
        </Retweeted>
      )}
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
    </>
  );
}

export {Post};
