import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';

import {SignUp} from '../pages/SignUp';
import {Login} from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export {App};
