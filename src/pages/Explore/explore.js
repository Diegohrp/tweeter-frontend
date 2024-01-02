import React from 'react';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {SearchBar} from './styles';
import {GeneralButton} from '../../styles/Generals/Button.styles';
import {AiOutlineSearch} from 'react-icons/ai';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {cleanPostsFromPageAction} from '../../actions/creators/posts.creators';
import {Loader} from '../../components/Request/Loading/Loading.styles';
import {UsersList} from '../../containers/UsersList/UsersList';
import {getUsers} from '../../services/user.service';
import {cleanUsersFromPage} from '../../actions/creators/user.creators';

function Explore() {
  const [filter, setFilter] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const page = location.pathname.slice(1);

  const limit = useSelector(
    (state) => state.posts[page]?.limit || state.user[page]?.limit
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!filter) return;

    navigate(`${location.pathname}?filter=${filter}`);
    setLoading(true);

    if (page.includes('people')) {
      const data = await getUsers(limit, 0, page, `?filter=${filter}`);
      dispatch(
        cleanUsersFromPage({
          data,
          limit,
          offset: 10,
        })
      );
    } else {
      const data = await getPosts(limit, 0, page, `?filter=${filter}`);
      dispatch(
        cleanPostsFromPageAction({
          page,
          data,
          limit,
          offset: 4,
        })
      );
    }
    setLoading(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit}>
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
        <GeneralButton type="submit">Search</GeneralButton>
      </SearchBar>
      {loading && <Loader />}
      {page === 'explore/people' ? (
        <UsersList />
      ) : (
        <PostsList requestFn={getPosts} />
      )}
    </>
  );
}

export {Explore};
