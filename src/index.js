import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme.js';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
