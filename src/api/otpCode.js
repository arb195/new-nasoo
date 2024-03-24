import axios from '@/api/index';
import {
  OTPCODE,
  VALIDOTPCODE,
  RESET_PASSWORD_BY_USER_NAME,
} from '@/constants/api';

export const otpCode = (params) => {
  const otpCode = OTPCODE();
  return axios.post(otpCode, {
    MobNum: params?.mobNum ?? '',
    Email: params?.user ?? '',
    TmpCode: '1',
    isMob: params?.isMob ?? false,
  });
};
export const validOtpCode = (params) => {
  const otpCode = VALIDOTPCODE();
  return axios.post(otpCode, {
    MobNum: params?.mobNum ?? '',
    Email: params?.Email ?? '',
    TmpCode: params?.otpCodeInp,
    isMob: params?.isMob ?? false,
  });
};
export const resetPassByUserName = (params) => {
  const otpCode = RESET_PASSWORD_BY_USER_NAME();
  return axios.post(otpCode, {
    UserId: 0,
    NewPass: params?.pass,
    ConfirmNewPass: params?.trypass,
    CurrentUsrPass: '',
    IsMob: params?.isMob ? true : false,
    UserName: params?.userName,
  });
};
