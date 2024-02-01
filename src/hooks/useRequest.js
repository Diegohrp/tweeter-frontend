import React from 'react';
import {useDispatch} from 'react-redux';
import {logoutUserAction} from '../actions/creators/user.creators';

const actionTypes = {
  onLoading: 'LOADING',
  onError: 'ERROR',
  onSuccess: 'SUCCESS',
  closeError: 'CLOSE_E',
  closeSuccess: 'CLOSE_S',
  onReset: 'RESET',
};
const initialState = {
  loading: false,
  error: null,
  response: null,
};

const reducerObj = (state, payload) => ({
  [actionTypes.onReset]: {
    loading: false,
    error: null,
    response: null,
  },
  [actionTypes.onLoading]: {
    ...state,
    error: null,
    response: null,
    loading: true,
  },
  [actionTypes.onError]: {
    ...state,
    error: payload,
    loading: false,
    response: null,
  },
  [actionTypes.onSuccess]: {
    ...state,
    error: null,
    loading: false,
    response: payload,
  },
  [actionTypes.closeError]: {
    ...state,
    error: null,
  },
  [actionTypes.closeSuccess]: {
    ...state,
    response: null,
  },
});

const reducer = (state, action) =>
  reducerObj(state)[action.type]
    ? reducerObj(state, action.payload)[action.type]
    : null;

function useRequest(init = initialState) {
  const reduxDispatch = useDispatch();

  const [state, dispatch] = React.useReducer(reducer, init);

  const closeErrorModal = () => {
    dispatch({type: actionTypes.closeError});
  };
  const closeSuccessModal = () => {
    dispatch({type: actionTypes.closeSuccess});
  };

  const reset = () => {
    console.log('Reset por cambio de página');
    dispatch({type: actionTypes.onReset});
  };

  const parseError = (err) => {
    let errorMsg;
    if (err?.response?.data) {
      //client error
      errorMsg = `${err?.response?.data?.error}: ${err?.response?.data?.message}`;
      if (err.response.request.status === 401) {
        //Unauthorized, the user doesn't have a valid token
        reduxDispatch(logoutUserAction());
      }
    } else {
      errorMsg = err.message;
    }
    return errorMsg;
  };

  const sendDataRequest = async (request, data) => {
    try {
      dispatch({type: actionTypes.onLoading});
      const res = await request(data);
      dispatch({type: actionTypes.onSuccess, payload: res});
    } catch (err) {
      dispatch({type: actionTypes.onError, payload: parseError(err)});
    }
  };

  const getDataReques = async (request) => {
    try {
      dispatch({type: actionTypes.onLoading});
      const res = await request();
      dispatch({type: actionTypes.onSuccess, payload: res});
    } catch (err) {
      console.error(err);
      dispatch({type: actionTypes.onError, payload: parseError(err)});
    }
  };

  return {
    state,
    reset,
    sendDataRequest,
    getDataReques,
    closeErrorModal,
    closeSuccessModal,
  };
}

export {useRequest};
