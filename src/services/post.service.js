import axios from 'axios';
import {endPoints} from './api/endpoints';
import {headersMulti} from './headers';

async function sendPostData(body) {
  const {data} = await axios.post(endPoints.posts.post, body, headersMulti);
  return data;
}

export {sendPostData};
