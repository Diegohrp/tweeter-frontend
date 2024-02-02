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
    interaction.key: the name of the interaction in the redux state and Post props
    interaction.numKey: the name of the key for the num of any reaction in the redux state and Post props
    num: Number of reactions (likes,retweets,bookmarks)
    toggle: function to add/remove likes,retweets,bookmarks
    liked,saved and who_retweeted_id are props, and they are modified by redux.
    They are global states to persist the change in the button when the user changes the page and then returns.
  */
  const {toggle: toggleLike} = useToggleInteraction({
    interaction: {key: 'liked', numKey: 'num_likes'},
    interValue: props.liked,
    quantity: props.numLikes,
    route: 'likePost',
    page: props.page,
    postIndex: props.postIndex,
  });

  const {toggle: toggleRetweet} = useToggleInteraction({
    interaction: {key: 'who_retweeted_id', numKey: 'num_retweets'},
    interValue: props.whoRetweetedId,
    quantity: props.numRetweets,
    route: 'retweet',
    page: props.page,
    postIndex: props.postIndex,
  });

  const {toggle: toggleBookMark} = useToggleInteraction({
    interaction: {key: 'saved', numKey: ''},
    interValue: props.saved,
    quantity: 0,
    route: 'bookmarks',
    page: props.page,
    postIndex: props.postIndex,
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
      txt: props.whoRetweetedId ? 'Retweeted' : 'Retweet',
      action: () => toggleRetweet(props.postId),
      disabled: props.authorId === userId,
    },
    {
      icon: FiHeart,
      txt: props.liked ? 'Liked' : 'Like',
      action: () => toggleLike(props.postId),
    },
    {
      icon: FiBookmark,
      txt: props.saved ? 'Saved' : 'Save',
      action: () => toggleBookMark(props.postId),
    },
  ];

  return (
    <>
      {props.whoRetweeted && props.whoRetweetedId != 0 && (
        <Retweeted>
          <Link to={`/profile/tweets/${props.whoRetweetedId}`}>
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
            numLikes={props.numLikes}
            numRetweets={props.numRetweets}
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
