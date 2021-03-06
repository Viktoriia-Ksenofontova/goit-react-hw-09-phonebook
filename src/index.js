import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store.store}>
    <Router>
      <React.StrictMode>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
