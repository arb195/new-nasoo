import axios from '@/api/index';
import { GETALLPROVOFCOUNTRY } from '@/constants/api';

export const allProvs = (params) => {
  const allProv = GETALLPROVOFCOUNTRY();
  return axios.post(allProv, {
    Id: params,
  });
};
