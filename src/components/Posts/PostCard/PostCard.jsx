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

const PostCard = ({showMakeComment}) => {
  const buttons = [
    {icon: MdOutlineModeComment, txt: 'Comment', action: showMakeComment},
    {icon: MdOutlineCached, txt: 'Retweet'},
    {icon: FiHeart, txt: 'Like'},
    {icon: FiBookmark, txt: 'Save'},
  ];

  return (
    <Card>
      <Author>
        <SmallProfileImg />
        <div>
          <h2>Mikaela Stanley</h2>
          <span>24 August at 20:43</span>
        </div>
      </Author>
      <TextContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        cupiditate perferendis consectetur!
      </TextContent>
      <ImgContent>
        <img
          src="https://res.cloudinary.com/dpimpzyh4/image/upload/v1674950833/tweeter/posts/1674950830130_bob.jfif.jpg"
          alt="post image"
        />
      </ImgContent>
      <Details>
        <button>449 Comments</button>
        <button>59 Retweets</button>
        <button>23 Saved</button>
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
