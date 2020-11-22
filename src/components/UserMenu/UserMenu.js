import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import authSelectors from '../../redux/auth/authSelectors';

function UserMenu() {
  const name = useSelector(authSelectors.getName);
  const dispatch = useDispatch();

  return (
    <>
      <span>Wellcome,{name}</span>
      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
        LogOut
      </button>
    </>
  );
}

export default UserMenu;
