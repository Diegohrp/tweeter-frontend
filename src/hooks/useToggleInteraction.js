import React from 'react';
import {addInteraction, removeInteraction} from '../services/post.service';

function useToggleInteraction({interaction, interactionName, quantity = 0}) {
  const [inter, setInter] = React.useState(interaction);
  const [num, setNum] = React.useState(quantity);

  //Makes a request with the DB to add/remove a like, bookmark or retweet
  const toogle = async (postId) => {
    try {
      if (inter) {
        await removeInteraction(postId, interactionName);
        setNum(num - 1);
      } else {
        await addInteraction({postId}, interactionName);
        setNum(num + 1);
      }
      setInter(!inter);
    } catch (err) {
      console.error(err.message);
    }
  };

  return {inter, num, toogle};
}

export {useToggleInteraction};
