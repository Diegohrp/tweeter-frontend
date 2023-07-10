import {createGlobalStyle} from 'styled-components';

export const textFont = 'Noto Sans';
export const titleFont = 'Poppins';

const light = {
  background: '#F2F2F2',
  cards: '#FFFFFF',
  borders: '#E0E0E0',
  secondaryText: '#828282',
  primaryText: '#4F4F4F',
  titlesColor: '#000000',
  brandColor: '#2F80ED',
  errorColor: '#CB4335',
  likedColor: '#EB5757',
  savedColor: '#2D9CDB',
  retweetedColor: '#27AE60',
  successColor: '#00913f',
  placeholderColor: '#b1b1b1',
  comments: '#FAFAFA',
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }

  body{
    font-family: ${textFont};
    background-color: ${(props) => props.theme.background};
   /*  color: ${(props) => props.theme.primaryText} */
    overflow: hidden;
  }

`;

export {GlobalStyle, light};
