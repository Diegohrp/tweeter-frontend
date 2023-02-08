import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

function PrivateRouteWrapper({children}) {
  const userAuth = useSelector((state) => state.user.isAuth);

  if (!userAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export {PrivateRouteWrapper};
