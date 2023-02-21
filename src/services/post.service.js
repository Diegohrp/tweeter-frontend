import axios from 'axios';
import {endPoints} from './api/endpoints';
import {headersJson, headersMulti} from './headers';

async function sendPostData(body) {
  const {data} = await axios.post(endPoints.posts.post, body, headersMulti);
  return data;
}

async function getHomePosts(limit, offset) {
  const {data} = await axios.get(
    endPoints.posts.getHome(limit, offset),
    headersJson
  );
  return data;
}

async function likePost(body) {
  const {data} = await axios.post(endPoints.posts.likePost, body, headersJson);
  return data;
}

async function removeLikePost(postId) {
  const {data} = await axios.delete(
    `${endPoints.posts.likePost}/${postId}`,
    headersJson
  );
  return data;
}

export {sendPostData, getHomePosts, likePost, removeLikePost};
