import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginCallback from './LoginCallback';
import { setAccessToken } from './security';
import LoadingSvg from './LoadingSvg';
import './Styles.css';
import Logout from './Logout';

const Routes = () => {
  document.body.classList.add('loading');
  const {
    getAccessTokenSilently,
    isLoading,
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      setAccessToken(getAccessTokenSilently);
      document.body.classList.remove('loading');
    }
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  });

  return (
    <>
      <div id="splash-screen" className="splash-screen active">
        <LoadingSvg />
      </div>
      <Switch>
        <Route path="/login-callback" render={() => <LoginCallback />} />
        <Route path="/logout" render={() => <Logout />} />
      </Switch>
    </>
  );
};

export default Routes;
