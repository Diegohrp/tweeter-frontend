import React from 'react';
import {
  Card,
  Author,
  TextContent,
  ImgContent,
  Details,
  Buttons,
} from './PostCard.styles';

import {MdOutlineModeComment, MdOutlineCached} from 'react-icons/md';
import {FiHeart, FiBookmark} from 'react-icons/fi';

import {SmallProfileImg} from '../../common/SmallProfileImg/SmallProfileImg';
import {InteractionButton} from '../InteractionButton/InteractionButton';

const PostCard = ({
  showMakeComment,
  author,
  userPhoto,
  date,
  textContent,
  imgContent,
  numLikes,
  numComments,
  numRetweets,
}) => {
  const buttons = [
    {icon: MdOutlineModeComment, txt: 'Comment', action: showMakeComment},
    {icon: MdOutlineCached, txt: 'Retweet'},
    {icon: FiHeart, txt: 'Like'},
    {icon: FiBookmark, txt: 'Save'},
  ];

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
          />
        ))}
      </Buttons>
    </Card>
  );
};

export {PostCard};
