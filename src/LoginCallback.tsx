import React, { useEffect } from 'react';
import { IdToken, useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

interface User {
  id: string;
  picture: string;
  email: string;
  givenName: string;
  surName: string;
  orgId: string;
  orgDomain: string;
  orgName: string;
}

const storeUser = async (user: IdToken) => {
  const userWithOrg: User = {
    id: user.sub || '',
    picture: user.picture || '',
    email: user.email || '',
    givenName: user.given_name || '',
    surName: user.family_name || '',
    orgId: user['https://insurwave.com/organisations'][0],
    orgDomain: user['https://insurwave.com/orgId'],
    orgName: 'TODO',
  };

  localStorage.setItem('user', JSON.stringify(userWithOrg));
};

const LoginCallback = () => {
  const { user, getIdTokenClaims } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    const getIdToken = async () => {
      const idToken = await getIdTokenClaims();
      await storeUser(idToken);
      history.push('/');
    };

    if (user) {
      getIdToken();
    }
  }, [user, getIdTokenClaims, history]);
  return <>Loading...</>;
};

export default LoginCallback;
