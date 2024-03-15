'use client';

import { useState } from 'react';
import s from './signup.module.scss';
import Logo from '@/root/src/components/header/logo/logo';
import Link from 'next/link';
import Btn from '@/components/common/btn/btn';
import { Controller, useForm } from 'react-hook-form';
import PersonalInfo from './personalInfo/personalInfo';
import AccountInfo from './accountInfo/accountInfo';
import { useSnackbar } from 'notistack';
import { addUser } from '@/api/addUser';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [enableBtn, setEnableBtn] = useState(0);
  const [stepTwo, setStepTwo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      name: '',
      family: '',
      date: '',
      gender: '',
    },
  });

  const watchAllFields = watch();

  const onSumbit = (model) => {
    console.log(model);
    setLoading(true);
    model = { UsrMobReg: validPhone, UsrEmailReg: validEmail, ...model };
    addUser(model)
      .then(({ data }) => {
        setLoading(false);
        if (data?.IsSuccess === true) {
          console.log(data);

          enqueueSnackbar('ثبت نام با موفقیت انجام شد', { variant: 'success' });
          router.push('/login');
        } else {
          enqueueSnackbar('مشکلی رخ داد دوباره تلاش کنید', {
            variant: 'error',
          });
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

  return (
    <div className={s.signup}>
      <div className={s.signup_logo}>
        <Logo />
      </div>
      <div className={s.signup_title}>
        <span className={s.signup_titlePage}>ایجاد حساب کاربری</span>
        <Link className={s.signup_backLink} prefetch={false} href={'/'}>
          بازگشت
        </Link>
      </div>
      <form className={s.signup_form} onSubmit={handleSubmit(onSumbit)}>
        {stepTwo === false ? (
          <PersonalInfo
            register={register}
            controller={Controller}
            control={control}
          />
        ) : (
          <AccountInfo
            register={register}
            controller={Controller}
            control={control}
            watchFields={watchAllFields}
            validPhone={validPhone}
            setValidPhone={setValidPhone}
            validEmail={validEmail}
            setValidEmail={setValidEmail}
          />
        )}
        <div className={s.signup_btns}>
          <Btn
            className={s.signup_continubtn}
            disabled={Object.keys(watchAllFields).some(
              (k) => !watchAllFields[k]
            )}
            onClick={() => {
              setStepTwo(true);
            }}
            loading={loading}
          >
            ادامه
          </Btn>
          {stepTwo && (
            <Btn
              className={s.signup_continubtn}
              outline={true}
              type={enableBtn == false ? 'button' : 'submit'}
              onClick={() => {
                setStepTwo(false);
              }}
            >
              بازگشت
            </Btn>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;
