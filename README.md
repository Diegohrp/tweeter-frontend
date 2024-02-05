# Tweeter Frontend

- [About the Project](#about-the-project)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Authors](#authors)

## About the Project

This project is the frontend for a Twitter-like application developed as part of a challenge from [devChallenges.io](https://legacy.devchallenges.io/challenges/rleoQc34THclWx1cFFKH). 

It's designed to emulate some of Twitter's core functionalities, offering a dynamic platform for users to engage in social interactions through posts, comments, retweets, likes, and more.

## Features
- User Account Management
- Posts and Interactions
- Explore and Bookmarks
- Profiles

## Demo

The application is deployed on [Netlify](tubular-syrniki-a4621a.netlify.app/home)

**User Account Management**
- Create a new account and log in.

**Posts and Interactions**
- Post text with hashtags or images.
- Comment on posts with text and images.
- Like, retweet, or save posts.
- Like comments.

**Explore and Bookmarks**
- Search for users and follow them.
- Filter tweets by recent, popular, or those containing images.
- View saved tweets, liked tweets, and saved user's tweets in bookmarks.

**Profiles**
- View user profiles with their posts, likes, retweets, and image-containing tweets.
- Follow or unfollow users directly from their profile.

## Installation

To set up the project locally, follow these steps:

```bash
git clone https://github.com/Diegohrp/tweeter-frontend.git
cd tweeter-frontend
npm install
npm start
```

# Dependencies

- React and ReactDOM for building the user interface.
- Redux for state management.
- React Router for navigation.
- Axios for HTTP requests.
- Styled-components for styling.

For a complete list, refer to the **package.json** file in the project repository

# Environment Variables
To run this project, you'll need to add the following environment variables to your .env file:

- **API_URL:** The base URL of the backend API.
- **API_VERSION:** The version of the API you're targeting.
- **API_KEY:** A key for accessing the API, if required.

## License

This project is under the MIT License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors
This project was developed by [Diego Herrera Prado](https://www.linkedin.com/in/diego-hp/) as part of a challenge from devChallenges.io.

Feel free to reach out if you have any suggestion or if you want to work with me 😀.
