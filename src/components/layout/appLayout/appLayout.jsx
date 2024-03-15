'use client';

import MainLayout from '@/root/src/components/layout/mainLayout';
import BlankLayout from '@/components/layout/blankLayout/blankLayout';
import ProfileLayout from '@/components/layout/profileLayout/profileLayout';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';
import { useRouter, usePathname } from 'next/navigation';

const AppLayout = ({
  children,
  data,
  loading,
  type = 'main',
  layoutLoading,
  device = null,
}) => {
  const [checkRes] = useCheckBreakpoint(device);
  // const router = useRouter();
  const pathname = usePathname();
  if (type == 'main') {
    return (
      <MainLayout
        data={data}
        loading={loading}
        layoutLoading={layoutLoading}
        device={device}
      >
        {children}
      </MainLayout>
    );
  } else if (type == 'ProfileLayout') {
    // console.log(pathname);
    return (
      // <MainLayout
      //   data={data}
      //   loading={loading}
      //   layoutLoading={layoutLoading}
      //   device={device}
      // >
      !checkRes(['xxs', 'xs', 'sm']) ? (
        <ProfileLayout>{children}</ProfileLayout>
      ) : pathname.startsWith('/mobile/my-account') ||
        pathname.startsWith('/my-account') ? (
        <ProfileLayout>{children}</ProfileLayout>
      ) : (
        children
      )
      // </MainLayout>
    );
  } else {
    return (
      <BlankLayout data={data} loading={loading} device={device}>
        {children}
      </BlankLayout>
    );
  }
};

export default AppLayout;
