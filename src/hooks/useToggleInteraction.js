import React from 'react';
import {addInteraction, removeInteraction} from '../services/post.service';
import {setPostInteractionAction} from '../actions/creators/posts.creators';
import {useDispatch} from 'react-redux';

function useToggleInteraction({
  interaction,
  page,
  postIndex,
  route,
  interValue,
  quantity = 0,
}) {
  const dispatch = useDispatch();

  //Makes a request with the DB to add/remove a like, bookmark or retweet
  const toggle = async (postId) => {
    let interactionVal = interValue;
    let numInter = quantity;

    try {
      if (interactionVal) {
        await removeInteraction(postId, route);
        numInter--;
        interactionVal = 0;
      } else {
        interactionVal = await addInteraction(postId, route);
        numInter++;
        if (!interactionVal) interactionVal = true;
      }
      dispatch(
        setPostInteractionAction({
          page,
          postIndex,
          interaction, //{key,keyNum}
          interactionValue: interactionVal,
          quantity: numInter,
        })
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return {toggle};
}

export {useToggleInteraction};
