import axios from '@/api/index';
import { GetAllClassInstancesByClsId } from '../../constants/api';

const AllGathering = (params) => {
  const getAllClassInstancesByClsId = GetAllClassInstancesByClsId();
  return axios.post(getAllClassInstancesByClsId, {
    Id: `${params?.id}`,
  });
};

export default AllGathering;
