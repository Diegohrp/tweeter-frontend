import axios from 'axios';
import {endPoints} from './api/endpoints';

function createAccount(body) {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = axios.post(endPoints.users.signup, body, config);
  return response;
}

export {createAccount};
