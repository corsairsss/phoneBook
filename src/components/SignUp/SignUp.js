import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

import PhoneBookRegisterView from '../../views/PhoneBookRegisterView/PhoneBookRegisterView.js';

function SignUp() {
  const isAuth = useSelector(authSelectors.getToken);

  return <>{<PhoneBookRegisterView />}</>;
}

export default SignUp;
