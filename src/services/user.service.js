import axios from 'axios';
import {endPoints} from './api/endpoints';

const config = {
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
    'api-key': process.env.API_KEY,
  },
};

async function createAccount(body) {
  const response = await axios.post(endPoints.users.signup, body, config);
  return response;
}

async function login(body) {
  const response = await axios.post(endPoints.auth.login, body, config);
  return response;
}

export {createAccount, login};
