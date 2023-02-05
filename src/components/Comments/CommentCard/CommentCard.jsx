import React from 'react';
//styles
import {CommentContainer, Interactions, Content} from './CommentCard.styles';
//components
import {SmallProfileImg} from '@components/common/SmallProfileImg/SmallProfileImg';
import {Link} from 'react-router-dom';
//icons
import {FiHeart} from 'react-icons/fi';

function CommentCard() {
  return (
    <CommentContainer>
      <SmallProfileImg />
      <div>
        <Content>
          <div>
            <Link to="/login">Waqar Bloom</Link>
            <span>24 August at 20:43</span>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            quod at eveniet dolor.
          </p>
        </Content>
        <Interactions>
          <button>
            <FiHeart />
            Like
          </button>
          <span>12k likes</span>
        </Interactions>
      </div>
    </CommentContainer>
  );
}

export {CommentCard};
