import axios from 'axios';
import {endPoints} from './api/endpoints';
import Cookies from 'js-cookie';
const headersJson = {
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
    'api-key': process.env.API_KEY,
    Authorization: `Bearer ${Cookies.get('token')}`,
  },
};

async function createAccount(body) {
  const response = await axios.post(endPoints.users.signup, body, headersJson);
  return response;
}

async function login(body) {
  const response = await axios.post(endPoints.auth.login, body, headersJson);
  return response;
}

async function getProfilePhoto() {
  const {data} = await axios.get(endPoints.users.photo, headersJson);
  return data;
}

export {createAccount, login, getProfilePhoto};
