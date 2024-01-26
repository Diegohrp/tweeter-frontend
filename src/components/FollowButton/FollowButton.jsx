import React from 'react';
import {FButton} from './FollowButton.styles';
import {IoMdPersonAdd} from 'react-icons/io';

const FollowButton = ({following, style = {}}) => {
  return (
    <FButton style={style} type="button">
      {!following && (
        <>
          <IoMdPersonAdd />
          Follow
        </>
      )}
      {following && 'Following'}
    </FButton>
  );
};

export {FollowButton};
