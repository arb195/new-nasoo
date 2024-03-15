'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import s from './mainLayout.module.scss';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';
import Icon from '@/components/common/icon/icon';

// const CartBox = dynamic(() => import('@/components/cartBox/cartBox'), {
//   ssr: true,
// });

const theme = createTheme({
  breakpoints: {
    values: {
      xsss: 0,
      xss: 375,
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1336,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1336px',
        },
      },
      defaultProps: {
        maxWidth: false,
        fixed: true,
      },
    },
    MuiGrid: {
      defaultProps: {
        columns: '24',
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 'initial',
        },
      },
    },
  },
  typography: {
    fontFamily: `inherit`,
    fontSize: 14,
    fontWeightLight: 200,
    fontWeightRegular: 'normal',
    fontWeightMedium: 500,
    fontWeightBold: 'bold',
    fontWeightBolder: 900,
  },
  palette: {
    primary: {
      main: '#4683B6',
      darker: '#4683B6',
    },
  },
});

function SnackbarButtons({ key }) {
  const { closeSnackbar } = useSnackbar();

  return (
    <Icon
      src={'close'}
      onClick={() => closeSnackbar(key)}
      className="closeSnackBar"
      width={10}
      heiight={10}
    />
  );
}

function MainLayout({ children, mainClass, device = null }) {
  const [checkRes] = useCheckBreakpoint(device);
  const [open, setOpen] = useState(false);

  return (
    <SnackbarProvider
      maxSnack={3}
      action={(key) => <SnackbarButtons key={key} />}
    >
      <ThemeProvider theme={theme}>
        <Header device={device} />
        <div className={`${s[mainClass] ?? ''} siteMain`}>{children}</div>
        <Footer device={device} />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default MainLayout;
