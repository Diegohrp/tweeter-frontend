//This object is used to tell the PostList component
//the redux state array where we'll be adding and getting posts
//Example: home:[],likes:[],tweets:[] etc
export const pages = {
  home: 'home',
  bookmarks: {
    yourTweets: {
      route: 'bookmarks/your_tweets',
      page: 'bookmarks_your_tweets',
    },
  },
};
