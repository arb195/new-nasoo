import { API_URL } from '@/root/env';

export const LOGIN = () => `${API_URL}/Auth/SignIn`;
export const CURRENTUSERINFO = () => `${API_URL}/Auth/GetCurrentUserInfo`;
export const OTPCODE = () => `${API_URL}/Auth/GetTempCodeForUser`;
export const VALIDOTPCODE = () => `${API_URL}/Auth/ValidateTempCodeForUser`;
export const RESET_PASSWORD_BY_USER_NAME = () =>
  `${API_URL}/Auth/ResetPasswordByUserName`;
export const ADDUSER = () => `${API_URL}/Auth/AddUser`;
export const GETALLJALASEFARDIS = () => `${API_URL}/Nasoo/GetAllJalaseFardis`;
