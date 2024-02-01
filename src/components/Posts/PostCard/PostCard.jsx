import React from 'react';
//styles
import {
  Card,
  Author,
  TextContent,
  ImgContent,
  Details,
  Buttons,
} from './PostCard.styles';
//components
import {SmallProfileImg} from '../../common/SmallProfileImg/SmallProfileImg';
import {InteractionButton} from '../InteractionButton/InteractionButton';
import {Link, NavLink} from 'react-router-dom';

const PostCard = ({
  show,
  author,
  authorId,
  userPhoto,
  date,
  textContent,
  imgContent,
  numLikes,
  numComments,
  numRetweets,
  buttons,
}) => {
  //Formats text when there is a hashtag
  const printHashtags = (lineText) => {
    const hashtagRegex = /^#(\w+)*$/;
    return lineText
      .split(' ')
      .map((word, index) => (
        <React.Fragment key={index}>
          {hashtagRegex.test(word) ? (
            <Link to={`/hashtags/${word.replace('#', '')}`}>{word}</Link>
          ) : (
            `${word} `
          )}
        </React.Fragment>
      ));
  };

  return (
    <Card>
      <Author>
        {show && <SmallProfileImg userId={authorId} image={userPhoto} />}
        <div>
          <NavLink to={`/profile/tweets/${authorId}`}>
            <h2>{author}</h2>
          </NavLink>
          <span>{date}</span>
        </div>
      </Author>
      <TextContent>
        {textContent.split(/\r\n|\r|\n/).map((line, index) => (
          <React.Fragment key={index}>
            {printHashtags(line)}
            <br />
          </React.Fragment>
        ))}
      </TextContent>
      {imgContent && show && (
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
