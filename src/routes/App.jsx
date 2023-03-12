import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';

import {SignUp} from '../pages/SignUp';
import {Login} from '../pages/Login';
import {Home} from '../pages/Home';
import {Layout} from '../containers/Layout/Layout';
import {PrivateRouteWrapper} from './PrivateRouteWrapper';
import {Bookmarks} from '../pages/Bookmarks';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRouteWrapper>
                <Home />
              </PrivateRouteWrapper>
            }
          />
          <Route
            exact
            path="/bookmarks"
            element={
              <PrivateRouteWrapper>
                <Bookmarks />
              </PrivateRouteWrapper>
            }
          />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/hashtags/:hash" element={<h2>HASHTAGS</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export {App};
