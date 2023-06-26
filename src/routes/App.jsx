import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {SignUp} from '../pages/SignUp';
import {Login} from '../pages/Login';
import {Home} from '../pages/Home';
import {Layout} from '../containers/Layout/Layout';
import {PrivateRouteWrapper} from './PrivateRouteWrapper';
import {Bookmarks} from '../pages/Bookmarks/bookmarks';
import {BookmarksPage} from '../pages/Bookmarks';
import {ExploreMenu} from '../components/common/ExploreMenu/ExploreMenu';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <PrivateRouteWrapper>
                <Home page="home" route="home" />
              </PrivateRouteWrapper>
            }
          />

          <Route
            path="/bookmarks"
            element={
              <PrivateRouteWrapper>
                <BookmarksPage />
              </PrivateRouteWrapper>
            }>
            <Route
              path="your_tweets"
              element={
                <Bookmarks
                  page="bookmarks_your_tweets"
                  route="/bookmarks/your_tweets"
                />
              }
            />
            <Route
              path="tweets"
              element={
                <Bookmarks page="bookmarks_tweets" route="/bookmarks/tweets" />
              }
            />
            <Route
              path="likes"
              element={
                <Bookmarks page="bookmarks_likes" route="/bookmarks/likes" />
              }
            />
          </Route>

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/hashtags/:hash" element={<h2>HASHTAGS</h2>} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export {App};
