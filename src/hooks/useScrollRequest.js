import React from 'react';
import {useRequest} from './useRequest';
import {useDispatch} from 'react-redux';

function useScrollRequest(
  getDataService,
  page,
  setDataAction,
  limit,
  offset,
  filter
) {
  const [endScroll, setEndScroll] = React.useState(false);

  const {
    state: {loading, response, error},
    getDataReques,
  } = useRequest();

  const dispatch = useDispatch();

  //Make a request when the end of the scroll has been reached.
  const onScroll = async (e) => {
    console.log('ON SCROLL');
    console.log({limit, offset, page});
    //Prevents that a request is made when the user loads a new page and has scrolled in the previous page
    if (offset > 0) {
      //clientHeight: container height, what the user can see without scrolling
      //scrollTop: How much height the user has scrolled
      console.log('ENTRÓ EN IF OFFSET');
      if (
        e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight &&
        !loading &&
        !endScroll
      ) {
        console.log('END SCROLL');
        setEndScroll(true);
        await getDataReques(() => getDataService(limit, offset, page, filter));
        console.log('Petición por scroll');
        setEndScroll(false);
      }
    }
  };
  React.useEffect(() => {
    if (response) {
      dispatch(
        setDataAction({
          data: response,
          page,
          limit,
          offset: limit + offset,
        })
      );
    }
  }, [response]);

  return {loading, onScroll};
}

export {useScrollRequest};
