'use client';

import React from 'react';
import AppContext from '@/context/appContext';
import AppLayout from '@/components/layout/appLayout/appLayout';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import '@/styles/globals.scss';
import 'nprogress/nprogress.css';
import axios from '@/api/index';
import dynamic from 'next/dynamic';
import NextTopLoader from 'nextjs-toploader';
import { createRoot } from 'react-dom/client';

const SvgSprit = dynamic(
  () => import('@/components/common/icon/svgSprit/svgSprit'),
  {
    ssr: false,
  }
);

const Template = ({ children }) => {
  const [context, setContext] = useState('default context value');
  const [cookies, , removeCookie] = useCookies(['usersInfo']);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(cookies.usersInfo ? cookies.usersInfo : false);

    if (cookies.usersInfo) {
      const authorizationBase64 = 'Bearer ' + cookies.token;
      axios.defaults.headers.common = { Authorization: authorizationBase64 };
    }
  }, [cookies]);

  useEffect(() => {
    if (document) {
      const svgSpriteElement = document.getElementById('svgSprite');
      const root = createRoot(svgSpriteElement);
      root.render(<SvgSprit />);
    }
  }, []);

  return (
    <html>
      <body>
        <div id="svgSprite"></div>
        <NextTopLoader />
        <AppContext.Provider
          value={{
            state: [context, setContext],
            user: [user, setUser],
          }}
        >
          <AppLayout type="blank">{children}</AppLayout>
        </AppContext.Provider>
      </body>
    </html>
  );
};

export default Template;
