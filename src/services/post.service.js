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

async function addBookmark(postId) {
  const {data} = await axios.post(
    `${endPoints.posts.bookmarks}`,
    {postId},
    headersJson
  );
  return data;
}

async function removeBookmark(bookmarkId) {
  const {data} = await axios.delete(
    `${endPoints.posts.bookmarks}/${bookmarkId}`,
    headersJson
  );
  return data;
}

export {
  sendPostData,
  getHomePosts,
  addInteraction,
  removeInteraction,
  addBookmark,
  removeBookmark,
};
