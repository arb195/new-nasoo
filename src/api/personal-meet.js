import axios from '@/api/index';
import { GETALLJALASEFARDIS } from '@/constants/api';

export const AllJalaseFardis = (params) => {
  const GetAllJalaseFardis = GETALLJALASEFARDIS();
  return axios.post(GetAllJalaseFardis, {
    Id: params?.id,
  });
};
