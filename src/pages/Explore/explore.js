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

function Explore() {
  const [filter, setFilter] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const page = location.pathname.slice(1);

  const limit = useSelector((state) => state.posts[page].limit);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (filter) {
      navigate(`${location.pathname}?filter=${filter}`);
      setLoading(true);
      const data = await getPosts(limit, 0, page, `?filter=${filter}`);
      setLoading(false);
      dispatch(
        cleanPostsFromPageAction({
          page,
          data,
          limit,
          offset: 4,
        })
      );
    }
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
      <PostsList requestFn={getPosts} />
    </>
  );
}

export {Explore};
