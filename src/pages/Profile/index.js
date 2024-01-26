import React from 'react';
import {CoverImg, Main, ProfileCard, ProfileContainer} from './styles';
import {UsersList} from '../../containers/UsersList/UsersList';
import {ExploreMenu} from '../../components/common/ExploreMenu/ExploreMenu';
import {FollowButton} from '../../components/FollowButton/FollowButton';

const Profile = () => {
  return (
    <Main>
      <ProfileContainer>
        <CoverImg>
          <img
            src="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cover image"
            title="Cover image"
          />
        </CoverImg>
        <ProfileCard>
          <figure>
            <img
              src="https://i.pinimg.com/originals/71/2d/a9/712da9f354dc1d46414c9931c7ec82d6.jpg"
              alt="Profile image"
            />
          </figure>

          <section>
            <header>
              <h2>Daniel Jensen</h2>
              <section>
                <p>2589</p>
                <p>306</p>
              </section>
            </header>
            <main>
              <p>Photographer & Filmmaker based in Copenhagen, Denmark ✵ 📷</p>
            </main>
          </section>

          <FollowButton
            following={false}
            style={{height: '40px', width: '100px'}}
          />
        </ProfileCard>
      </ProfileContainer>
      {/*  <UsersList /> */}
    </Main>
  );
};

export {Profile};
