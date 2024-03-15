import { useEffect, useState } from 'react';
import s from './changePassword.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@/root/src/components/common/input/input';
import Btn from '@/components/common/btn/btn';
import BtnLink from '@/components/common/btn/btnLink/btnLink';
import UserInfoCard from '@/components/common/userInfoCard/userInfoCard';
import { useRouter } from 'next/navigation';
import { isEmail } from '@/hook/isEmail';
import { resetPassByUserName } from '@/api/otpCode';
import { useSnackbar } from 'notistack';

const ChangePassword = ({ userInfo }) => {
  const { register, handleSubmit, watch } = useForm();
  const [enableBtn, setEnableBtn] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const watchAllFields = watch();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  let userInfoObj = [];
  if (!isEmail(userInfo)) {
    userInfoObj = [
      {
        title: 'شماره همراه',
        value: userInfo,
      },
    ];
  } else {
    userInfoObj = [
      {
        title: 'ایمیل',
        value: userInfo,
      },
    ];
  }

  useEffect(() => {
    if (watchAllFields?.pass === watchAllFields?.trypass) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [watchAllFields]);

  const onSumbit = (model) => {
    if (isEmail(userInfo)) {
      model = { isMob: false, userName: userInfo, ...model };
    } else {
      model = { isMob: true, userName: userInfo, ...model };
    }

    resetPassByUserName(model)
      .then(({ data }) => {
        if (data?.Data === true) {
          enqueueSnackbar('رمزعبور با موفقیت تغییر کرد :)', {
            variant: 'success',
          });
          router.push('/');
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

  return (
    <>
      <div className={s.changePass_info}>
        <span className={s.changePass_infoTitle}>اطلاعات کاربری شما</span>
        <UserInfoCard data={userInfoObj} />
      </div>
      <form onSubmit={handleSubmit(onSumbit)} className={s.changePass_form}>
        {!newPass ? (
          <>
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

            <Btn
              className={`${s.changePass_submit} ${
                enableBtn == false ? s.changePass_disableBtn : ' '
              }`}
              type={'button'}
              onClick={() => {
                if (enableBtn) {
                  setNewPass(true);
                }
              }}
            >
              ذخیره رمز عبور جدید
            </Btn>
          </>
        ) : (
          <>
            <span className={s.changePass_finalSubmitText}>
              شماره تلفن همراه و یا ایمیلی که در زمان ثبت نام وارد کرده‌اید، نام
              کاربری شما هستند.
            </span>
            <div className={s.changePass_finalsubmit}>
              <Btn
                className={`${s.changePass_submit} ${
                  s.changePass_submit__small
                } ${enableBtn == false ? s.changePass_disableBtn : ' '}`}
                type={'submit'}
              >
                ذخیره
              </Btn>
              <BtnLink modifier={'small'} text="انصراف" link={'/'} />
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default ChangePassword;
