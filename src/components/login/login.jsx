'use client';

import { useState, useContext } from 'react';
import s from './login.module.scss';
import Input from '@/root/src/components/common/input/input';
import { useForm } from 'react-hook-form';
import Logo from '@/root/src/components/header/logo/logo';
// import { otp } from '@/api/otp';
import { isEmail } from '@/hook/isEmail';
import { login, GetCurrentUserInfo } from '@/api/login';
import { Redirects } from '@/constants/general';
import AppContext from '@/context/appContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Btn from '@/components/common/btn/btn';
import { useCookies } from 'react-cookie';
import axios from '@/api/index';
import { useSnackbar } from 'notistack';
import BtnLink from '@/components/common/btn/btnLink/btnLink';

const Login = ({
  redirect = Redirects.afterLogin,
  modifier,
  title,
  subTitle,
  callBack,
}) => {
  const appContext = useContext(AppContext);
  const [, setUser] = appContext.user;
  const [, setCookie] = useCookies(['usersInfo']);
  const router = useRouter();
  const nonce = appContext.nonce;
  const { enqueueSnackbar } = useSnackbar();
  let modifiers =
    modifier &&
    modifier.split(' ')?.map((item) => {
      return s[item];
    });

  // const [sendCode, setSendCode] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [ep, setEp] = useState(false);
  const [value, setValue] = useState(0);
  const [enableBtn, setEnableBtn] = useState(false);

  const { register, handleSubmit } = useForm();

  const { register: registerEmail, handleSubmit: handleSubmitEmail } =
    useForm();

  const onSumbit = (model) => {
    setLoading(true);
    if (!isEmail(model.email)) {
      model = { isMob: true, mobNum: Number(model.email), ...model };
      delete model.email;
    } else {
      model = { isMob: false, ...model };
    }
    login(model)
      .then(({ data }) => {
        // setLoading(false);
        if (data?.IsSuccess === true) {
          const token = data?.Data;
          setCookie('token', token, {
            path: '/',
            maxAge: 24 * 60 * 60 * 30,
          });
          // setUser(token);
          axios.defaults.headers.common = {
            Authorization: 'Bearer ' + token,
          };
          ///
          GetCurrentUserInfo()
            .then(({ data }) => {
              setLoading(false);
              if (data?.IsSuccess === true) {
                const userInfo = data?.Data;
                setCookie('usersInfo', userInfo, {
                  path: '/',
                  maxAge: 24 * 60 * 60 * 30,
                });
                setUser(userInfo);
                // axios.defaults.headers.common = {
                //   Authorization: userInfo,
                // };

                enqueueSnackbar('با موفقیت وارد شدید', { variant: 'success' });
                router.push('/personal-meet');
              } else {
                enqueueSnackbar('رمز عبور اشتباه است', { variant: 'error' });
              }
            })
            .catch((error) => {
              if (!error?.response?.data?.IsSuccess) {
                enqueueSnackbar(error?.response?.data?.Message, {
                  variant: 'error',
                });
              }
              setLoading(false);
            });
          ///
          // enqueueSnackbar('با موفقیت وارد شدید', { variant: 'success' });
          // router.push('/personal-meet');
        } else {
          enqueueSnackbar('رمز عبور اشتباه است', { variant: 'error' });
        }
      })
      .catch((error) => {
        if (!error?.response?.data?.IsSuccess) {
          enqueueSnackbar(error?.response?.data?.Message, {
            variant: 'error',
          });
        }
        setLoading(false);
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${s.login} ${modifiers && modifiers.join(' ')}`}>
      <div className={s.login_wrapper}>
        {title && <div className={s.login_title}>{title}</div>}

        <div className={s.login_logo}>
          <Logo />
        </div>

        <Link href={'/gathering'}>گردهمایی</Link>
        <form className={s.login_form} onSubmit={handleSubmitEmail(onSumbit)}>
          <Input
            modifier={`${s.login_input} ${s.login_inputEmail}`}
            {...registerEmail('email')}
            type={'text'}
            register={registerEmail}
            label="شماره تلفن همراه یا ایمیل "
            placeholder={
              'شماره تلفن همراه یا ایمیل خود را به انگلیسی وارد کنید.'
            }
            autoComplete="one-time-code"
            onChange={(e) => {
              e.target.value == '' ? setEnableBtn(false) : setEnableBtn(true);
            }}
            required
          />
          <div className={s.login_inputwrapper}>
            <Input
              modifier={` ${s.login_inputEmail}`}
              {...registerEmail('password')}
              type={'password'}
              label="رمز عبور"
              register={registerEmail}
              placeholder={'رمز عبور خود را به انگلیسی وارد کنید.'}
              autoComplete="one-time-code"
              onChange={(e) => {
                e.target.value == '' ? setEnableBtn(false) : setEnableBtn(true);
              }}
              required
            />
            <Link
              className={s.login_forgetPass}
              prefetch={false}
              href={'/forget-password'}
            >
              رمز عبور را فراموش کرده‌ام
            </Link>
          </div>

          <Btn
            className={`${s.login_submit} ${
              enableBtn == false ? s.login_disableBtn : ' '
            }`}
            type={enableBtn == false ? 'button' : 'submit'}
            loading={loading}
          >
            ورود به ناسو
          </Btn>
          <span className={s.login_saveBtn}>
            ذخیره اطلاعات
            <Input
              modifier={`${s.login_input} ${s.login_inputCheckbox}`}
              {...registerEmail('checkbox')}
              type={'checkbox'}
              register={registerEmail}
            />
          </span>
        </form>
        <BtnLink
          text=" هنوز در ناسو حساب کاربری ندارم"
          link={'/signup'}
          outline={true}
        />
      </div>
    </div>
  );
};

export default Login;
