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

export function loadComments(state, payload) {
  const {currentPostIndex, page, comments} = payload;
  const newPostsList = [...state[page].posts];
  const currentPost = newPostsList[currentPostIndex];

  newPostsList[currentPostIndex] = {
    ...currentPost,
    comments: [...(currentPost.comments || []), ...comments],
  };

  return {...state, [page]: {...state[page], posts: newPostsList}};
}

function getCurrentPost({index, posts}) {}
