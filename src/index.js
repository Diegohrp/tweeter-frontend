import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './routes/App';
import {GlobalStyle, light} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
//redux
import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
