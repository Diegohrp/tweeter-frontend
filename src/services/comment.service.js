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

async function addLike(commentId) {
  await axios.post(endPoints.comments.likeComment, {commentId}, headersJson);
}

async function removeLike(commentId) {
  await axios.delete(
    `${endPoints.comments.likeComment}/${commentId}`,
    headersJson
  );
}

export {makeComment, loadComments, addLike, removeLike};
