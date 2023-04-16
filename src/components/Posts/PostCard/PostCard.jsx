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
import {Link} from 'react-router-dom';

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
        <SmallProfileImg image={userPhoto} />
        <div>
          <h2>{author}</h2>
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
