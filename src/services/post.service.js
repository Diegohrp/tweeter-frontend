import axios from 'axios';
import {endPoints} from './api/endpoints';
import {headersJson, headersMulti} from './headers';

async function sendPostData(body) {
  const {data} = await axios.post(endPoints.posts.post, body, headersMulti);
  return data;
}

async function getPosts(limit, offset, route, filter = '') {
  //console.log(endPoints.posts.getPosts(limit, offset, route, filter));
  const {data} = await axios.get(
    endPoints.posts.getPosts(limit, offset, route, filter),
    headersJson
  );
  return data;
}

async function addInteraction(postId, interaction) {
  const {data} = await axios.post(
    endPoints.posts[interaction],
    {postId},
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
