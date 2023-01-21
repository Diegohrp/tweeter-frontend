import axios from 'axios';
import {endPoints} from './api/endpoints';

async function createAccount(body) {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      'api-key': process.env.API_KEY,
    },
  };

  const response = await axios.post(endPoints.users.signup, body, config);
  return response;
}

export {createAccount};
