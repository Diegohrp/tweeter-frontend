import axios from 'axios';
import {headersMulti, headersJson} from './headers';
import {endPoints} from './api/endpoints';

async function makeComment(body) {
  const {data} = await axios.post(
    endPoints.comments.makeComment,
    body,
    headersMulti
  );
  return data;
}

async function loadComments(postId, limit, offset) {
  const {data} = await axios.get(
    endPoints.comments.loadComments(postId, limit, offset),
    headersJson
  );
  return data;
}

export {makeComment, loadComments};
