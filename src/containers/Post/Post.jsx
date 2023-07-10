import React from 'react';
import {Link} from 'react-router-dom';
//styles
import {PostContainer, Retweeted} from './Post.styles';
//containers
import {MakeComment} from '@containers/MakeComment/MakeComment';
import {PostCard} from '@components/Posts/PostCard/PostCard';
import {CommentsList} from '../CommentsList/CommentsList';
//icons
import {MdOutlineModeComment, MdOutlineCached} from 'react-icons/md';
import {FiHeart, FiBookmark} from 'react-icons/fi';
import {useSelector} from 'react-redux';
//hooks
import {useObserver} from '../../hooks/useObserver';
import {useToggleInteraction} from '../../hooks/useToggleInteraction';

function Post(props) {
  //Global state fron redux to get the userId
  const userId = useSelector((state) => state.user.userId);
  //State to show or hide the makeComment component
  const [showComment, setShowComment] = React.useState(false);
  //state to increment numComments
  const [numComments, setNumComments] = React.useState(props.numComments);
  //custom hook to use intersection observer and implement a lazy loading
  const {element, show} = useObserver();
  /*
    Custom hook "useToggleInteraction"
    inter: used to change the word and color in buttons and to decide if add/remove
    the interaction.
    num: Number of reactions (likes,retweets,bookmarks)
    toggle: function to add/remove likes,retweets,bookmarks
  */
  const {
    inter: liked,
    num: numLikes,
    toggle: toggleLike,
  } = useToggleInteraction({
    interaction: props.liked,
    interactionName: 'likePost',
    quantity: props.numLikes,
  });

  const {
    inter: retweeted,
    num: numRetweets,
    toggle: toggleRetweet,
  } = useToggleInteraction({
    interaction: props.whoRetweetedId === userId,
    interactionName: 'retweet',
    quantity: props.numRetweets,
  });

  const {inter: saved, toggle: toggleBookMark} = useToggleInteraction({
    interaction: props.saved,
    interactionName: 'bookmarks',
  });

  //Offset and limit to get comments
  const limit = 4;
  const [offset, setOffset] = React.useState(0);

  //interaction buttons
  const buttons = [
    {
      icon: MdOutlineModeComment,
      txt: 'Comment',
      action: () => setShowComment(!showComment),
    },
    {
      icon: MdOutlineCached,
      txt: retweeted ? 'Retweeted' : 'Retweet',
      action: () => toggleRetweet(props.postId),
      disabled: props.authorId === userId,
    },
    {
      icon: FiHeart,
      txt: liked ? 'Liked' : 'Like',
      action: () => toggleLike(props.postId),
    },
    {
      icon: FiBookmark,
      txt: saved ? 'Saved' : 'Save',
      action: () => toggleBookMark(props.postId),
    },
  ];

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
        <>
          <PostCard
            show={show}
            buttons={buttons}
            {...props}
            numLikes={numLikes}
            numRetweets={numRetweets}
            numComments={numComments}
          />
          {showComment && (
            <MakeComment
              page={props.page}
              postId={props.postId}
              retweet={props.retweetId}
              setNumComments={setNumComments}
              numComments={numComments}
              offset={offset}
              setOffset={setOffset}
            />
          )}
          {showComment && (
            <CommentsList
              page={props.page}
              postId={props.postId}
              retweet={props.retweetId}
              offset={offset}
              setOffset={setOffset}
              limit={limit}
            />
          )}
        </>
      </PostContainer>
    </>
  );
}

export {Post};
