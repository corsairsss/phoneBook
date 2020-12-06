import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperation.js';
import s from './Register.module.css';

import SvgEye from '../../components/assets/SvgEye/SvgEye.js';
import SvgEyeHide from '../../components/assets/SvgEyeHide/SvgEyeHide.js';

function PhoneBookRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [show, setShow] = useState('password');
  const [avtiveBtn, setAvtiveBtn] = useState(true);

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
  const updateConfirm = ({ target }) => {
    setConfirmPassword(target.value);
    if (password === target.value) setAvtiveBtn(false);
    else setAvtiveBtn(true);
  };

  function onHandleClick() {
    show === 'text' ? setShow('password') : setShow('text');
  }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <div className={s.container}>
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
                type={show}
                value={password}
                onChange={updatePassword}
                name="password"
              />
            </label>

            <label className={s.form__label}>
              passwordConfirm:
              <input
                className={s.form__input}
                type={show}
                value={passwordConfirm}
                onChange={updateConfirm}
                name="confirmPassword"
              />
            </label>

            <button
              type="submit"
              disabled={avtiveBtn}
              className={!avtiveBtn ? s.form__btn : s.notActive}
            >
              To Register
            </button>
            <button
              type="button"
              onClick={onHandleClick}
              className={s.passShow__btn}
            >
              {show === 'password' ? <SvgEye /> : <SvgEyeHide />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default PhoneBookRegister;
