import axios from 'axios';
import {endPoints} from './api/endpoints';
import {headersJson} from './headers';

async function createAccount(body) {
  const {data} = await axios.post(endPoints.users.signup, body, headersJson);
  return data;
}

async function login(body) {
  const {data} = await axios.post(endPoints.auth.login, body, headersJson);
  return data;
}

async function getBasicUserInfo() {
  const {data} = await axios.get(endPoints.users.basicInfo, headersJson);
  return data;
}

async function getProfileInfo({profileId}) {
  const {data} = await axios.get(
    endPoints.users.profile({profileId}),
    headersJson
  );
  return data;
}

async function getUsers(limit, offset, page, filter = '') {
  const {data} = await axios.get(
    endPoints.users.explore({limit, offset, filter}),
    headersJson
  );
  return data;
}

export {createAccount, login, getBasicUserInfo, getUsers, getProfileInfo};
