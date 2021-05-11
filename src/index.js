import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import App from './App';


Amplify.configure({
  Auth:{
      mandatorySignId: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

