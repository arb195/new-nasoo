import { API_URL } from '@/root/env';

export const LOGIN = () => `${API_URL}/Auth/SignIn`;
export const ADDUSER = () => `${API_URL}/Auth/AddUser`;
export const CURRENTUSERINFO = () => `${API_URL}/Auth/GetCurrentUserInfo`;
export const OTPCODE = () => `${API_URL}/Auth/GetTempCodeForUser`;
export const VALIDOTPCODE = () => `${API_URL}/Auth/ValidateTempCodeForUser`;
export const RESET_PASSWORD_BY_USER_NAME = () =>  `${API_URL}/Auth/ResetPasswordByUserName`;
// jalase fardi
export const GETALLJALASEFARDIS = () => `${API_URL}/Nasoo/GetAllJalaseFardis`;
// general
export const GETALLPROVOFCOUNTRY = () => `${API_URL}/General/GetAllProvOfCountry`;
//gathering

export const GetAllClassInstancesByClsId = () => `${API_URL}/Nasoo/GetAllClassInstancesByClsId`;
export const AddClassInstance = () => `${API_URL}/Nasoo/AddClassInstance`;
export const UpdateClassInstance= () => `${API_URL}/Nasoo/UpdateClassInstance`;
export const GetAllClassByDafId= () => `${API_URL}/Nasoo/GetAllClassByDafId`;
export const AddClas = () => `${API_URL}/Nasoo/AddClas`;
export const UpdateClas = () => `${API_URL}/Nasoo/UpdateClas`;
