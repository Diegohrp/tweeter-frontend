import React, {useRef} from 'react';
import {useScrollRequest} from '../../hooks/useScrollRequest';
import {Loading} from '../../components/Request/Loading/Loading';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getPosts} from '../../services/post.service';
import {setPostsAction} from '../../actions/creators/posts.creators';
import {Layout} from './Layout';
import {setExploredUsersAction} from '../../actions/creators/user.creators';
import {getUsers} from '../../services/user.service';

const InfiniteScroll = ({children}) => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  //the query parameter for the searchs in "explore"
  const filter = location.search;

  //limit and offset from redux
  const limit = useSelector(
    (state) => state.posts[currentPage]?.limit || state.user[currentPage]?.limit
  );
  const offset = useSelector(
    (state) =>
      state.posts[currentPage]?.offset || state.user[currentPage]?.offset
  );

  const scrollState =
    useSelector(
      (state) =>
        state.posts[currentPage]?.scroll || state.user[currentPage]?.scroll
    ) || 0;

  const scrollRef = useRef(null);

  const {loading, onScroll} = useScrollRequest(
    !currentPage.includes('people') ? getPosts : getUsers,
    currentPage,
    !currentPage.includes('people') ? setPostsAction : setExploredUsersAction,
    limit,
    offset,
    filter
  );
  //Updates the scroll position when the user changes of page
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollState;
    }
  }, [currentPage]);

  return (
    <div onScroll={onScroll} ref={scrollRef} style={{overflow: 'scroll'}}>
      <Layout scrollRef={scrollRef} currentPage={currentPage}>
        {children}
      </Layout>
      {loading && (
        <div className="loader">
          <Loading />
        </div>
      )}
    </div>
  );
};

export {InfiniteScroll};
