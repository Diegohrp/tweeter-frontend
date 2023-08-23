import React from 'react';
//styles
import {
  CommentContainer,
  Interactions,
  Content,
  ImgContent,
} from './CommentCard.styles';
//components
import {SmallProfileImg} from '@components/common/SmallProfileImg/SmallProfileImg';
import {Link} from 'react-router-dom';
import {InteractionButton} from '../../Posts/InteractionButton/InteractionButton';
//services
import {addLike, removeLike} from '../../../services/comment.service';
//icons
import {FiHeart} from 'react-icons/fi';
import {useDispatch, useSelector} from 'react-redux';

//Actions
import {setLikeCommentAction} from '../../../actions/creators/posts.creators';

function CommentCard({
  page,
  id,
  postIndex,
  author,
  userPhoto,
  content,
  image,
  numLikes,
  date,
  liked,
}) {
  //Find the index of the current comment in the array comments[] of the current post
  const currentCommentIndex = useSelector((state) =>
    state.posts[page].posts[postIndex]?.comments.findIndex(
      (comment) => comment.id === id
    )
  );

  //Redux dispatcher
  const dispatch = useDispatch();

  //format comment content
  const formatText = () => {
    return content.split(/\n|\r|\n\r/).map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const toggleLike = async () => {
    try {
      liked ? await removeLike(id) : await addLike(id);
      dispatch(
        setLikeCommentAction({
          postIndex,
          commentIndex: currentCommentIndex,
          num_likes: liked ? numLikes - 1 : numLikes + 1,
          liked: !liked,
          page,
        })
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <CommentContainer>
      <SmallProfileImg image={userPhoto} />
      <div>
        <Content>
          <div>
            <Link to="/login">{author}</Link>
            <span>{date}</span>
          </div>
          <p>{formatText()}</p>
        </Content>
        {image && (
          <ImgContent>
            <img src={image} alt="comment image" />
          </ImgContent>
        )}
        <Interactions>
          <InteractionButton
            Icon={FiHeart}
            text={liked ? 'Liked' : 'Like'}
            onClick={toggleLike}
          />
          <span>{`${numLikes} likes`}</span>
        </Interactions>
      </div>
    </CommentContainer>
  );
}

export {CommentCard};
