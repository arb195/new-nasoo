import s from './otpInput.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/root/src/components/common/input/input';
import Btn from '@/components/common/btn/btn';
import { isEmail } from '@/hook/isEmail';
import { validOtpCode } from '@/api/otpCode';
import { useSnackbar } from 'notistack';

const OtpInput = ({ user, isValid }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    watch: watchOtp,
  } = useForm();

  const watchAllFields = watchOtp();
  const onOtpSumbit = (model) => {
    let newModel = model;
    if (!isEmail(user)) {
      newModel = { isMob: true, mobNum: user, ...newModel };
      // delete newModel.user;
    } else {
      newModel = { isMob: false, Email: user, ...newModel };
    }

    validOtpCode(newModel)
      .then(({ data }) => {
        setLoading(false);
        if (data?.Data === true) {
          isValid(true);
          enqueueSnackbar('کد به درستی وارد شد', { variant: 'success' });
        } else {
          isValid(false);
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

  return (
    <div className={s.otpInput_otpMain}>
      <div className={s.otpInput_otpCode}>
        <Input
          modifier={`${s.otpInput_input}`}
          {...registerOtp('otpCodeInp')}
          type={'text'}
          register={registerOtp}
          label="کد تایید"
          topDesc="کد تایید برای شما ارسال شده است، آن‌ را وارد کنید."
          autoComplete="one-time-code"
          required
        />
        <span className={s.otpInput_otpSend}>
          ارسال مجدد
          <svg height="10" width="10" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="#fff"></circle>
          </svg>
        </span>
      </div>
      <Btn
        className={s.otpInput_otpBtn}
        loading={loading}
        onClick={(e) => {
          e.preventDefault();
          onOtpSumbit(watchAllFields);
        }}
      >
        ثبت کد تایید
      </Btn>
    </div>
  );
};

export default OtpInput;
