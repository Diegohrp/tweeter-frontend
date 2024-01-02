import React from 'react';
import {setExploredUsersAction} from '../../actions/creators/user.creators';
import {useRequest} from '../../hooks/useRequest';
import {getUsers} from '../../services/user.service';
import {useSelector, useDispatch} from 'react-redux';
import {SmallProfileImg} from '../../components/common/SmallProfileImg/SmallProfileImg';
import {IoMdPersonAdd} from 'react-icons/io';
import {Container, List, UserCard, FollowButton} from './UsersList.styles';
import {Loading} from '../../components/Request/Loading/Loading';

const UsersList = () => {
  const {
    state: {loading, response: list, error},
    reset,
    getDataReques,
  } = useRequest();

  //Global state from redux and dispatcher
  const offset = useSelector((state) => state.user['explore/people'].offset);
  const limit = useSelector((state) => state.user['explore/people'].limit);
  const usersList = useSelector((state) => state.user['explore/people'].users);
  //Dispatcher
  const dispatch = useDispatch();

  const makeFirstRequest = async () => {
    if (!usersList.length && !list) {
      await getDataReques(() => getUsers(limit, offset, ''));
    } else if (!usersList.length && list.length) {
      dispatch(
        setExploredUsersAction({
          data: list,
          limit,
          offset: limit + offset,
          scroll: 0,
        })
      );
    }
  };
  React.useEffect(() => {
    makeFirstRequest();
  }, [list]);

  return (
    <Container>
      {loading && <Loading />}
      {!loading && (
        <List>
          {usersList.map(
            ({
              id,
              username,
              name,
              last_name,
              num_followers,
              following,
              photo,
            }) => (
              <UserCard key={id}>
                <div>
                  <SmallProfileImg image={photo} />
                  <div>
                    <p>{username}</p>
                    <p>
                      {name} {last_name}
                    </p>
                    <p>{num_followers} followers</p>
                  </div>
                </div>
                <div>
                  <FollowButton type="button">
                    {following && (
                      <>
                        <IoMdPersonAdd />
                        Follow
                      </>
                    )}
                    {!following && 'Following'}
                  </FollowButton>
                </div>
              </UserCard>
            )
          )}
        </List>
      )}
    </Container>
  );
};

export {UsersList};
