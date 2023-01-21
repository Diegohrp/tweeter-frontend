import React from 'react';

function useRequest() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  const closeErrorModal = () => {
    setError(null);
  };
  const closeSuccessModal = () => {
    setResponse(null);
  };

  const makeRequest = async (request, data) => {
    try {
      setLoading(true);
      setError(null);
      const res = await request(data);
      setLoading(false);
      setError(null);
      setResponse(res.data);
    } catch (err) {
      let errorMsg;
      if (err?.response?.data) {
        errorMsg = `${err?.response?.data?.error}: ${err?.response?.data?.message}`;
      } else {
        errorMsg = err.message;
      }
      setError(errorMsg);
      setLoading(false);
      setResponse(null);
    }
  };

  return {
    loading,
    error,
    response,
    makeRequest,
    closeErrorModal,
    closeSuccessModal,
  };
}

export {useRequest};
