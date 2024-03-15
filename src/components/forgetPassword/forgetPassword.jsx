'use client';

import { useState } from 'react';
import s from './forgetPassword.module.scss';
import Logo from '@/root/src/components/header/logo/logo';
import Link from 'next/link';
import SendCodeForm from './sendCodeForm/sendCodeForm';
import ChangePassword from './changePassword/changePassword';

const ForgetPassword = () => {
  const [userInfo, setUserInfo] = useState(false);

  return (
    <div className={s.forgetPass}>
      <div className={s.forgetPass_logo}>
        <Logo />
      </div>
      <div className={s.forgetPass_title}>
        <span className={s.forgetPass_titlePage}>
          {userInfo ? 'رمز عبور جدید' : 'فراموشی رمز عبور'}
        </span>
        {!userInfo ? (
          <Link className={s.forgetPass_backLink} prefetch={false} href={'/'}>
            بازگشت
          </Link>
        ) : (
          ''
        )}
      </div>
      {!userInfo ? (
        <SendCodeForm validCode={setUserInfo} />
      ) : (
        <ChangePassword userInfo={userInfo} />
      )}
    </div>
  );
};

export default ForgetPassword;
