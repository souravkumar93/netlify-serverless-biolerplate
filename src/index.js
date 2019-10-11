import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import apolloClient from './apolloClient';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
