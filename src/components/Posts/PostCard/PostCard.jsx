import React from 'react';
import {
  Card,
  Author,
  TextContent,
  ImgContent,
  Details,
  Buttons,
} from './PostCard.styles';

import {SmallProfileImg} from '../../common/SmallProfileImg/SmallProfileImg';
import {InteractionButton} from '../InteractionButton/InteractionButton';

const PostCard = ({
  author,
  userPhoto,
  date,
  textContent,
  imgContent,
  numLikes,
  numComments,
  numRetweets,
  buttons,
}) => {
  return (
    <Card>
      <Author>
        <SmallProfileImg image={userPhoto} />
        <div>
          <h2>{author}</h2>
          <span>{date}</span>
        </div>
      </Author>
      <TextContent>{textContent}</TextContent>
      {imgContent && (
        <ImgContent>
          <img src={imgContent} alt="post image" />
        </ImgContent>
      )}
      <Details>
        <button>{`${numLikes} Likes`} </button>
        <button>{`${numComments} Comments`}</button>
        <button>{`${numRetweets} Retweets`}</button>
      </Details>
      <Buttons>
        {buttons.map((button) => (
          <InteractionButton
            key={button.txt}
            Icon={button.icon}
            text={button.txt}
            onClick={button?.action}
            disabled={button?.disabled}
          />
        ))}
      </Buttons>
    </Card>
  );
};

export {PostCard};
