import React from 'react';

const actionTypes = {
  onLoading: 'LOADING',
  onError: 'ERROR',
  onSuccess: 'SUCCESS',
  closeError: 'CLOSE_E',
  closeSuccess: 'CLOSE_S',
};

const reducerObj = (state, payload) => ({
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

const initialState = {
  loading: false,
  error: null,
  response: null,
};

function useRequest() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const closeErrorModal = () => {
    dispatch({type: actionTypes.closeError});
  };
  const closeSuccessModal = () => {
    dispatch({type: actionTypes.closeSuccess});
  };

  const parseError = (err) => {
    let errorMsg;
    if (err?.response?.data) {
      errorMsg = `${err?.response?.data?.error}: ${err?.response?.data?.message}`;
    } else {
      errorMsg = err.message;
    }
    return errorMsg;
  };

  const sendDataRequest = async (request, data) => {
    try {
      dispatch({type: actionTypes.onLoading});
      const res = await request(data);
      dispatch({type: actionTypes.onSuccess, payload: res.data});
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
      dispatch({type: actionTypes.onError, payload: parseError(err)});
    }
  };

  return {
    state,
    sendDataRequest,
    getDataReques,
    closeErrorModal,
    closeSuccessModal,
  };
}

export {useRequest};
