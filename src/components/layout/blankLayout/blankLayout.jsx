"use client"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { useState } from 'react';
// import CartBox from '@/components/cartBox/cartBox';

const theme = createTheme({
  breakpoints: {
    values: {
      xsss: 0,
      xss: 460,
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

const BlankLayout = ({ children }) => {
  // const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default BlankLayout;
