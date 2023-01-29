import axios from 'axios';
import {endPoints} from './api/endpoints';

const config = {
  headers: {
    accept: '*/*',
    'Content-Type': 'multipart/form-data',
  },
};

async function sendPostData(body) {
  const {data} = await axios.post(endPoints.posts.post, body, config);
  return data;
}

export {sendPostData};
