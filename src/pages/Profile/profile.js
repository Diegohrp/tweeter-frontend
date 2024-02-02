import React from 'react';
import {CoverImg, ProfileCard, ProfileContainer, ProfileCover} from './styles';
import {FollowButton} from '../../components/FollowButton/FollowButton';
import {ExploreMenu} from '../../components/common/ExploreMenu/ExploreMenu';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {useLocation} from 'react-router-dom';
import {getProfileInfo} from '../../services/user.service';
import defaultImg from '../../assets/img/profile-default.svg';
import coverImg from '../../assets/img/cover-img.jpg';
import {useSelector} from 'react-redux';
const Profile = () => {
  const currentUserId = useSelector((state) => state.user.userId);
  const location = useLocation();
  const page = location.pathname.slice(1, location.pathname.lastIndexOf('/'));
  const profileId = location.pathname.split('/').at(-1);
  const [profile, setProfile] = React.useState(null);
  const [following, setFollowing] = React.useState(false);

  const profilePages = [
    {
      name: 'Tweets',
      path: `/profile/tweets/${profileId}`,
    },
    {
      name: 'Retweets',
      path: `/profile/retweets/${profileId}`,
    },
    {
      name: 'Media',
      path: `/profile/media/${profileId}`,
    },
    {
      name: 'Likes',
      path: `/profile/likes/${profileId}`,
    },
  ];
  const handleRequest = async () => {
    const data = await getProfileInfo({profileId});
    setProfile(data);
    setFollowing(data.following);
  };
  React.useEffect(() => {
    handleRequest();
  }, [profileId, page]);

  return (
    <>
      {profile && (
        <ProfileCover>
          <CoverImg>
            <img src={coverImg} alt="Cover image" title="Cover image" />
          </CoverImg>
          <ProfileCard>
            <figure>
              <img
                src={profile.photo || defaultImg}
                alt="Profile image"
                title={profile.username}
              />
            </figure>

            <section>
              <header>
                <h2>
                  {profile.name} {profile.last_name}
                </h2>
                <section>
                  <p>{profile.num_following}</p>
                  <p>{profile.num_followers}</p>
                </section>
              </header>
              <main>
                <p>{profile.bio}</p>
              </main>
            </section>

            {currentUserId !== profile.id && (
              <FollowButton
                followingId={profile.id}
                following={following}
                setFollowing={setFollowing}
                style={{height: '40px', width: '100px'}}
              />
            )}
          </ProfileCard>
        </ProfileCover>
      )}

      <ExploreMenu pages={profilePages} />

      <PostsList className="list" requestFn={getPosts} />
    </>
  );
};

export {Profile};
