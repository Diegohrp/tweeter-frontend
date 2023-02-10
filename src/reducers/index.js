import {combineReducers} from 'redux';
import {userReducer} from './user.reducer';
import {postsReducer} from './posts.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export {rootReducer};
