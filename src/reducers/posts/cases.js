export function setNewPostsList(state, payload) {
  const {page, data, limit, offset} = payload;
  const newPostsList = [...state[page].posts, ...data];
  return {
    ...state,
    [page]: {
      posts: newPostsList,
      limit,
      offset,
      scroll: state[page].scroll,
    },
  };
}

const getNewList = (state, page) => [...state[page].posts];

export function loadComments(state, payload) {
  const {currentPostIndex, page, comments} = payload;
  const newPostsList = getNewList(state, page);
  const currentPost = newPostsList[currentPostIndex];

  newPostsList[currentPostIndex] = {
    ...currentPost,
    comments: [...(currentPost.comments || []), ...comments],
  };

  return {...state, [page]: {...state[page], posts: newPostsList}};
}

export function addComment(state, payload) {
  const {currentPostIndex, page, comment} = payload;
  const newPostsList = getNewList(state, page);
  const currentPost = newPostsList[currentPostIndex];

  newPostsList[currentPostIndex] = {
    ...currentPost,
    comments: [comment, ...currentPost.comments],
  };

  return {...state, [page]: {...state[page], posts: newPostsList}};
}

export function addLikeToComment(state, payload) {
  const {page, postIndex, commentIndex, num_likes, liked} = payload;
  const newPostsList = getNewList(state, page);
  const currentPost = newPostsList[postIndex];
  const comment = currentPost.comments[commentIndex];

  currentPost.comments[commentIndex] = {
    ...comment,
    num_likes,
    liked,
  };

  return {...state, [page]: {...state[page], posts: newPostsList}};
}

export function addInteraction(state, payload) {
  //interaction: {name,numKey}, example: {name:"liked",numKey:"num_likes"}
  const {page, postIndex, interaction, interactionValue, quantity} = payload;
  const newPostsList = getNewList(state, page);
  const currentPost = newPostsList[postIndex];
  newPostsList[postIndex] = {
    ...currentPost,
    [interaction.key]: interactionValue, //truly or falsy
    [interaction.numKey]: quantity, //num of likes,bookmarks or retweets
  };
  return {...state, [page]: {...state[page], posts: newPostsList}};
}
