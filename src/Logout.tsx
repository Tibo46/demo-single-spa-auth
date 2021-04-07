import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
  const { logout } = useAuth0();
  localStorage.removeItem('user');
  logout({ returnTo: window.location.origin });

  return <></>;
}

export default Logout;
