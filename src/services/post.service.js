import axios from 'axios';
import {endPoints} from './api/endpoints';
import {headersJson, headersMulti} from './headers';

async function sendPostData(body) {
  const {data} = await axios.post(endPoints.posts.post, body, headersMulti);
  return data;
}

async function getPosts(limit, offset, route) {
  const {data} = await axios.get(
    endPoints.posts.getPosts(limit, offset, route),
    headersJson
  );
  return data;
}

async function addInteraction(body, interaction) {
  const {data} = await axios.post(
    endPoints.posts[interaction],
    body,
    headersJson
  );
  return data;
}

async function removeInteraction(postId, interaction) {
  const {data} = await axios.delete(
    `${endPoints.posts[interaction]}/${postId}`,
    headersJson
  );
  return data;
}

export {sendPostData, getPosts, addInteraction, removeInteraction};
