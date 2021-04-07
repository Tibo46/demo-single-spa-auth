import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Routes from './Routes';

export default function Root(props) {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENTID}
      redirectUri={`${window.location.origin}/login-callback`}
      audience={process.env.REACT_APP_AUTH_AUDIENCE}
      scope="read:current_user update:current_user_metadata"
      // useRefreshTokens={true}
    >
      <Router>
        <Routes />
      </Router>
    </Auth0Provider>
  );
}
