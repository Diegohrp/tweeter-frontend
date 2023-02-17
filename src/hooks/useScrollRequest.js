import React from 'react';
import {useRequest} from './useRequest';
import {useDispatch} from 'react-redux';

function useScrollRequest(getDataService, setDataAction) {
  const limit = 20;
  const [offset, setOffset] = React.useState(limit);
  const [endScroll, setEndScroll] = React.useState(false);

  const {
    state: {loading, response, error},
    getDataReques,
  } = useRequest();

  const dispatch = useDispatch();

  //Make a request when the end of the scroll has been reached.
  const onScroll = async (e) => {
    //clientHeight: container height, what the user can see without scrolling
    //scrollTop: How much height the user has scrolled
    if (
      e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight &&
      !loading &&
      !endScroll
    ) {
      setEndScroll(true);
      await getDataReques(() => getDataService(limit, offset));
      setOffset(offset + limit);
    }
  };
  React.useEffect(() => {
    console.log(offset);
    if (response) {
      dispatch(setDataAction(response));
      setEndScroll(false);
    }
  }, [response]);

  return {limit, offset, setOffset, loading, onScroll};
}

export {useScrollRequest};
