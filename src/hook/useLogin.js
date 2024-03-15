import { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import AppContext from '@/context/appContext';
import axios from '@/api/index';

export const useLogin = () => {
  const [, , removeCookie] = useCookies(['usersInfo']);
  const router = useRouter();
  const appContext = useContext(AppContext);
  const [, setUser] = appContext.user;

  const logout = () => {
    removeCookie('usersInfo', { path: '/' });
    setUser(false);
    router.push('/users/login');
    axios.defaults.headers.common = { Authorization: null };
  };

  return [logout];
};
