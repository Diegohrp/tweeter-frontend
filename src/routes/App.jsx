import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SignUp} from '../pages/SignUp';
import {Login} from '../pages/Login';
import {Home} from '../pages/Home';
import {InfiniteScroll} from '../containers/Layout/InfiniteScroll';
import {PrivateRouteWrapper} from './PrivateRouteWrapper';
import {Bookmarks} from '../pages/Bookmarks/bookmarks';
import {BookmarksPage} from '../pages/Bookmarks';
import {ExplorePage} from '../pages/Explore';
import {Explore} from '../pages/Explore/explore';

function App() {
  return (
    <BrowserRouter>
      <InfiniteScroll>
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRouteWrapper>
                <Home />
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
            <Route path="your_tweets" element={<Bookmarks />} />
            <Route path="tweets" element={<Bookmarks />} />
            <Route path="likes" element={<Bookmarks />} />
          </Route>

          <Route
            path="/explore"
            element={
              <PrivateRouteWrapper>
                <ExplorePage />
              </PrivateRouteWrapper>
            }>
            <Route path="top" element={<Explore />} />
            <Route path="latest" element={<Explore />} />
            <Route path="people" element={<Explore />} />
            <Route path="media" element={<Explore />} />
          </Route>

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/hashtags/:hash" element={<h2>HASHTAGS</h2>} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </InfiniteScroll>
    </BrowserRouter>
  );
}

export {App};
