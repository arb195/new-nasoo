import React from 'react';
import style from './alert.module.scss';

const Alert = ({ children }) => {
  return (
    <div className={style.alert}>
      <div className={style.alert__contents}>{children}</div>
      <img src={'/assets/img/alert.png'} className={style.alert__image} />
    </div>
  );
};

export default Alert;
