import React from 'react';
import {useRequest} from './useRequest';
import {useDispatch} from 'react-redux';

function useScrollRequest(
  getDataService,
  backendRoute,
  frontendPage,
  setDataAction,
  limit,
  offset
) {
  const [endScroll, setEndScroll] = React.useState(false);

  const {
    state: {loading, response, error},
    getDataReques,
  } = useRequest();

  const dispatch = useDispatch();

  //Make a request when the end of the scroll has been reached.
  const onScroll = async (e) => {
    //Prevents that a request is made when the user loads a new page and has scrolled in the previous page
    if (offset > 0) {
      //clientHeight: container height, what the user can see without scrolling
      //scrollTop: How much height the user has scrolled
      if (
        e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight &&
        !loading &&
        !endScroll
      ) {
        setEndScroll(true);
        await getDataReques(() => getDataService(limit, offset, backendRoute));
        setEndScroll(false);
      }
    }
  };
  React.useEffect(() => {
    if (response) {
      dispatch(
        setDataAction({
          data: response,
          page: frontendPage,
          limit,
          offset: limit + offset,
        })
      );
    }
  }, [response]);

  return {loading, onScroll};
}

export {useScrollRequest};
