import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './routes/App';
import {GlobalStyle, light} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
