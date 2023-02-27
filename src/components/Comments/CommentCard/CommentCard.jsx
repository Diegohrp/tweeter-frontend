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
//icons
import {FiHeart} from 'react-icons/fi';

function CommentCard({author, userPhoto, content, image, numLikes, date}) {
  return (
    <CommentContainer>
      <SmallProfileImg image={userPhoto} />
      <div>
        <Content>
          <div>
            <Link to="/login">{author}</Link>
            <span>{date}</span>
          </div>
          <p>{content}</p>
        </Content>
        {image && (
          <ImgContent>
            <img src={image} alt="comment image" />
          </ImgContent>
        )}
        <Interactions>
          <button>
            <FiHeart />
            Like
          </button>
          <span>{`${numLikes} likes`}</span>
        </Interactions>
      </div>
    </CommentContainer>
  );
}

export {CommentCard};
