import {createGlobalStyle} from 'styled-components';

export const textFont = 'Noto Sans';
export const titleFont = 'Poppins';

const light = {
  background: '#F2F2F2',
  cards: '#FFFFFF',
  borders: '#E0E0E0',
  secondaryText: '#828282',
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
    
  }

`;

export {GlobalStyle, light};