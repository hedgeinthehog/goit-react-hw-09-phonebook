import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';
import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ThemeProvider theme={theme}> */}
        <StylesProvider injectFirst>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          {/* </ThemeProvider> */}
        </StylesProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
