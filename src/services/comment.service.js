import axios from 'axios';
import {headersMulti} from './headers';
import {endPoints} from './api/endpoints';

async function makeComment(body) {
  await axios.post(endPoints.comments.makeComment, body, headersMulti);
}

export {makeComment};
