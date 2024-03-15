import axios from '@/api/index';
import { ADDUSER } from '@/constants/api';

export const addUser = (params) => {
  const addUser = ADDUSER();
  return axios.post(addUser, [{
    UsrFName: params?.name,
    UsrLName: params?.family,
    UsrSex: params?.gender == 'man' ? true : false,
    UsrBirthDate: params?.date,
    UsrMobNum: params?.countryCode + params?.phone,
    UsrEmail: params?.email,
    UsrMobReg: params?.UsrMobReg,
    UsrEmailReg: params?.UsrEmailReg,
    UsrPassword: params?.pass,
  }]);
};
