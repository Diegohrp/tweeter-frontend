import React from 'react';
import {CoverImg, ProfileCard, ProfileContainer, ProfileCover} from './styles';
import {FollowButton} from '../../components/FollowButton/FollowButton';
import {ExploreMenu} from '../../components/common/ExploreMenu/ExploreMenu';
import {PostsList} from '../../containers/PostsList/PostsList';
import {getPosts} from '../../services/post.service';
import {useLocation} from 'react-router-dom';
import {getProfileInfo} from '../../services/user.service';
import defaultImg from '../../assets/img/profile-default.svg';

const Profile = () => {
  const location = useLocation();
  const profileId = location.pathname.split('/').at(-1);
  const [profile, setProfile] = React.useState(null);

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
  };
  React.useEffect(() => {
    handleRequest();
  }, []);

  return (
    <>
      {profile && (
        <ProfileCover>
          <CoverImg>
            <img
              src="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cover image"
              title="Cover image"
            />
          </CoverImg>
          <ProfileCard>
            <figure>
              <img src={profile.photo || defaultImg} alt="Profile image" />
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

            <FollowButton
              following={profile.following}
              style={{height: '40px', width: '100px'}}
            />
          </ProfileCard>
        </ProfileCover>
      )}

      <ExploreMenu pages={profilePages} />

      <PostsList className="list" requestFn={getPosts} />
    </>
  );
};

export {Profile};
