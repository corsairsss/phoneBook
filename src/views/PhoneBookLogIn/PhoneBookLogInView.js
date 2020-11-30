import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperation.js';

import s from './LogIn.module.css';

function PhoneBookLogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const updateEmail = ({ target }) => setEmail(target.value);
  const updatePassword = ({ target }) => setPassword(target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      email,
      password,
    };
    dispatch(authOperation.logIn(obj));
    setPassword('');
    setEmail('');
  }
  return (
    <>
      {loading && <h2>loading...</h2>}
      {!loading && (
        <>
          <h2>LogIn on PhoneBook</h2>
          <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.form__label}>
              Email:
              <input
                className={s.form__input}
                type="email"
                value={email}
                onChange={updateEmail}
                name="email"
              />
            </label>

            <label className={s.form__label}>
              Password:
              <input
                className={s.form__input}
                type="password"
                value={password}
                onChange={updatePassword}
                name="password"
              />
            </label>

            <button type="submit" className={s.form__btn}>
              to LogIn
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default PhoneBookLogIn;
