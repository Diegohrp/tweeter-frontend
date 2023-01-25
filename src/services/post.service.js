import axios from 'axios';
import {endPoints} from './api/endpoints';

const config = {
  headers: {
    accept: '*/*',
    'Content-Type': 'multipart/form-data',
  },
};

async function sendData(body) {
  const response = await axios.post(endPoints.posts.post, body, config);
  return response;
}

export {sendData};
