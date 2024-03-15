import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useCookies } from 'react-cookie';

export function useCookie(name) {
  const { enqueueSnackbar } = useSnackbar();

  const [cookieLoading, setCookieLoading] = useState(false);
  const [cookies, setCookie] = useCookies([name]);
  const [isCookieActive, setIsCookieActive] = useState(false);
  const [snackbarActin, setSnackbarActin] = useState('');

  const handleClickVariant = (txt, status ,action) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(txt, { variant: status , action });
  };

  const addCompareItem = (item) => {
    setCookieLoading(true);
    // console.log(!cookies?.compare);
    if (!cookies?.compare?.includes(item)) {
      let compares = !cookies.compare ? [item] : [item, ...cookies.compare];
      setCookie(name, compares, {
        path: '/',
        maxAge: 24 * 60 * 60 * 30,
      });
      setIsCookieActive(true);
      handleClickVariant('با موفقیت اضافه شد', 'success',snackbarActin);
    } else {
      let compares = cookies.compare;
      let compareIndex = compares.indexOf(item);
      compares.splice(compareIndex, 1);
      setCookie(name, compares, {
        path: '/',
        maxAge: 24 * 60 * 60 * 30,
      });
      setIsCookieActive(false);
      handleClickVariant('با موفقیت حذف شد', 'success');
    }
    setCookieLoading(false);
  };

  return [
    cookies,
    setIsCookieActive,
    isCookieActive,
    cookieLoading,
    addCompareItem,
    setSnackbarActin,
  ];
}
