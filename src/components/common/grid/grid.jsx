'use client';

import { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const NsContainer = ({ children, ...other }) => {
  const container = useMemo(() => {
    return <Container {...other}>{children}</Container>;
  }, [children]);
  return container;
};

export const NsRow = ({ children, ...other }) => {
  const grid = useMemo(() => {
    return <Grid {...other}>{children}</Grid>;
  }, [children]);
  return grid;
};

export const NsCol = ({ children, ...other }) => {
  const grid = useMemo(() => {
    return <Grid {...other}>{children}</Grid>;
  }, [children]);
  return grid;
};
