'use client';

import s from './accountInfo.module.scss';
import { useState } from 'react';
import Input from '@/root/src/components/common/input/input';
import SelectField from '@/components/common/input/select';
import OtpInput from '@/components/common/otpInput/otpInput';
import { otpCode } from '@/api/otpCode';
import { isEmail } from '@/hook/isEmail';
import { useSnackbar } from 'notistack';

const AccountInfo = ({
  register,
  controller,
  control,
  watchFields,
  validPhone,
  setValidPhone,
  validEmail,
  setValidEmail,
}) => {
  const [isSendPhoneOtp, setIsSendPhoneOtp] = useState(false);
  const [isSendEmailOtp, setIsSendEmailOtp] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const sendCode = (model, seter, isEmail) => {
    let modelObj = {};
    if (isEmail) {
      modelObj = { isMob: false, user: model };
    } else {
      modelObj = { isMob: true, mobNum: model };
    }
    otpCode(modelObj)
      .then(({ data }) => {
        if (data?.IsSuccess === true) {
          seter(true);
          enqueueSnackbar('کد با موفقیت ارسال شد', { variant: 'success' });
        } else {
          enqueueSnackbar('مشکلی رخ داد دوباره تلاش کنید', {
            variant: 'error',
          });
        }
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          enqueueSnackbar(error?.response?.data?.message, {
            variant: 'error',
          });
        }
      });
  };

  if (
    watchFields?.phone?.length == 10 &&
    watchFields?.countryCode &&
    isSendPhoneOtp == false
  ) {
    setTimeout(() => {
      sendCode(
        watchFields?.countryCode + '' + watchFields?.phone,
        setIsSendPhoneOtp,
        false
      );
    }, 1000);
  }

  if (isEmail(watchFields?.email) && isSendEmailOtp == false) {
    setTimeout(() => {
      sendCode(watchFields?.email, setIsSendEmailOtp, true);
    }, 1000);
  }

  function dataSelectField(data) {
    return [
      {
        title: 'ایران',
        icon: {
          src: 'iran-flag',
          width: '24px',
          height: '24px',
        },
        value: '+98',
      },
      {
        title: 'آمریکا',
        icon: {
          src: 'iran-flag',
          width: '24px',
          height: '24px',
        },
        value: '+1',
      },
    ];
  }

  return (
    <div className={s.accountInfo}>
      <div
        className={`${s.accountInfo_phone} ${
          validPhone ? s.accountInfo_valid : ''
        }`}
      >
        <Input
          modifier={`${s.accountInfo_phoneInput}`}
          {...register('phone', { pattern: /^[0-9]+$/g })}
          type={'tel'}
          register={register}
          autoComplete="off"
          maxLength="10"
          pattern="[0-9۰-۹]*"
          inputMode="numeric"
          required
          label="شماره تلفن همراه"
          placeholder={'شماره تلفن همراه خود را وارد کنید.'}
        />
        <SelectField
          name={'countryCode'}
          label="کد کشور"
          options={dataSelectField()}
          FormController={controller}
          formControl={control}
          className={s.accountInfo_phoneSelect}
        />
      </div>
      {isSendPhoneOtp && !validPhone && (
        <OtpInput
          isValid={setValidPhone}
          user={watchFields?.countryCode + '' + watchFields?.phone}
        />
      )}
      <div className={validEmail ? s.accountInfo_valid : ''}>
        <Input
          {...register('email')}
          type={'text'}
          register={register}
          label="ایمیل"
          placeholder={'ایمیل خود را وارد کنید.'}
          autoComplete="one-time-code"
          required
        />
      </div>
      {isSendEmailOtp && !validEmail && (
        <OtpInput
          isValid={setValidEmail}
          user={watchFields?.countryCode + '' + watchFields?.phone}
        />
      )}
      <Input
        modifier={`${s.changePass_input} ${s.changePass_mb16}`}
        {...register('pass')}
        type={'password'}
        register={register}
        label="رمز عبور"
        placeholder={'رمز عبور خود را وارد کنید.'}
        autoComplete="one-time-code"
        required
      />
      <Input
        modifier={`${s.changePass_input}`}
        {...register('trypass')}
        type={'password'}
        register={register}
        label="تکرار رمز عبور"
        placeholder={'تکرار رمز عبور خود را وارد کنید.'}
        autoComplete="one-time-code"
        required
      />
    </div>
  );
};

export default AccountInfo;
