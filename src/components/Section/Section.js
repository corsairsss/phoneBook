import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Header from '../Header/Header.js';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';

import themeConfig from '../../configStyles/configStyle.js';

import s from './Section.module.css';

const Section = ({ theme, title, children }) => {
  return (
    <section className={s.container} style={themeConfig[theme]}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames={s}
        unmountOnExit
      >
        <h2>{title}</h2>
      </CSSTransition>
      <Header />
      {children}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    theme: phoneBookSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps)(Section);
