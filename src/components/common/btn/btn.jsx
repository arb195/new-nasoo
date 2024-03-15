import React, { memo } from 'react';
import s from './btn.module.scss';
import Loading from '@/components/common/loading/loading';

const Btn = ({
  name,
  btnName,
  icon,
  loading,
  className,
  children,
  modifier,
  outline = false,
  btnRef,
  // link,
  ...other
}) => {
  let modifiers =
    modifier &&
    modifier.split(' ').map((item) => {
      return s[item];
    });
  return (
    <button
      {...other}
      name={btnName}
      className={`${className ? className : ''} ${
        loading ? s.LoadingBtn_loading : ''
      }
      ${outline ? s.btn_outline : s.btn_normal}
      ${s.btn} ${modifiers && modifiers.join(' ')}`}
      ref={btnRef}
    >
      {icon && icon}
      {name}
      {children}
      {loading && <Loading className={s.LoadingBtn_loadComp} />}
    </button>
  );
};

export default memo(Btn);
