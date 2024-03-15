import { useEffect, useState } from 'react';
import s from './sendCodeForm.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@/root/src/components/common/input/input';
import Btn from '@/components/common/btn/btn';
import { isEmail } from '@/hook/isEmail';
import { otpCode, validOtpCode } from '@/api/otpCode';
import { useSnackbar } from 'notistack';

const SendCodeForm = ({ validCode }) => {
  const { register, handleSubmit, watch } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const [enableBtn, setEnableBtn] = useState(false);
  const [isSendOtp, setIsSendOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const watchAllFields = watch('user');

  useEffect(() => {
    setEnableBtn(watchAllFields?.length ? true : false);
  }, [watchAllFields]);

  const onSumbitCode = (model) => {
    setLoading(true);
    if (!isEmail(model.user)) {
      model = { isMob: true, mobNum: model.user, ...model };
      delete model.user;
    } else {
      model = { isMob: false, ...model };
    }
    otpCode(model)
      .then(({ data }) => {
        setLoading(false);
        if (data?.IsSuccess === true) {
          setIsSendOtp(true);
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

        setLoading(false);
      });
  };

  const onSumbitvalid = (model) => {
    if (!isEmail(model.user)) {
      model = { isMob: true, mobNum: model.user, ...model };
      delete model.user;
    } else {
      model = { isMob: false, ...model };
    }
    validOtpCode(model)
      .then(({ data }) => {
        setLoading(false);
        if (data?.Data === true) {
          validCode(model.user);
          enqueueSnackbar('کد به درستی وارد شد', { variant: 'success' });
        } else {
          enqueueSnackbar('کد وارد شده صحیح نیست', {
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

        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(!isSendOtp ? onSumbitCode : onSumbitvalid)}
      className={s.sendCodeForm_form}
    >
      <Input
        modifier={`${s.sendCodeForm_input} ${s.sendCodeForm_userName}`}
        {...register('user')}
        type={'text'}
        register={register}
        label="نام کاربری"
        topDesc="شماره تلفن همراه و یا ایمیلی که در زمان ثبت نام وارد کرده‌اید، نام کاربری شما هست."
        placeholder={'نام کاربری خود را به انگلیسی وارد کنید.'}
        autoComplete="one-time-code"
        required
      />

      {isSendOtp ? (
        <div className={s.sendCodeForm_otpCode}>
          <Input
            modifier={`${s.sendCodeForm_input}`}
            {...register('otpCodeInp')}
            type={'text'}
            register={register}
            label="رمز یکبار مصرف"
            topDesc="کد تایید به نام کاربری شما ارسال شده است، آن‌ را وارد کنید."
            autoComplete="one-time-code"
            required
          />
          <span className={s.sendCodeForm_otpSend}>
            ارسال مجدد
            <svg height="10" width="10" viewBox="0 0 20 20">
              <circle r="10" cx="10" cy="10" fill="#fff"></circle>
            </svg>
          </span>
        </div>
      ) : (
        ''
      )}

      <Btn
        className={`${s.sendCodeForm_submit} ${
          enableBtn == false ? s.sendCodeForm_disableBtn : ' '
        }`}
        type={enableBtn == false ? 'button' : 'submit'}
        loading={loading}
      >
        {isSendOtp ? 'ثبت رمز یکبار مصرف' : 'ارسال رمز یکبار مصرف'}
      </Btn>
    </form>
  );
};

export default SendCodeForm;
