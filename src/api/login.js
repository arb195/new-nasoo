import axios from '@/api/index';
import { LOGIN, CURRENTUSERINFO } from '@/constants/api';

export const login = (params) => {
  const login = LOGIN();
  return axios.post(login, {
    IsMob: params?.isMob ?? false,
    MobNum: params?.mobNum ? '+98' + params?.mobNum : '',
    Email: params?.email ?? '',
    Password: params?.password ?? '',
    PassEnc: params?.passEnc ?? false,
    UserId: 0,
    IsAdmin: false,
  });
};

export const GetCurrentUserInfo = () => {
  const url = CURRENTUSERINFO();
  return axios.post(url);
};
