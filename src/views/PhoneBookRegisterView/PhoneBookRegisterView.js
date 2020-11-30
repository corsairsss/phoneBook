import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperation.js';
import s from './Register.module.css';

function PhoneBookRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      name,
      email,
      password,
      passwordConfirm,
    };
    dispatch(authOperation.register(obj));
    setName('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  }
  const updateName = ({ target }) => setName(target.value);
  const updateEmail = ({ target }) => setEmail(target.value);
  const updatePassword = ({ target }) => setPassword(target.value);
  const updateConfirm = ({ target }) => setConfirmPassword(target.value);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <>
          <h2>Register on PhoneBook</h2>
          <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.form__label}>
              Name:
              <input
                className={s.form__input}
                type="text"
                value={name}
                onChange={updateName}
                name="name"
              />
            </label>

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

            <label className={s.form__label}>
              passwordConfirm:
              <input
                className={s.form__input}
                type="password"
                value={passwordConfirm}
                onChange={updateConfirm}
                name="confirmPassword"
              />
            </label>

            <button type="submit" className={s.form__btn}>
              To Register
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default PhoneBookRegister;
