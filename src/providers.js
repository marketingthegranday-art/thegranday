'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LoadingProvider } from './contexts/LoadingContext';
import theme from './theme';

export function Providers({ children }) {
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={true}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingProvider>
                {children}
        </LoadingProvider>
      </ThemeProvider>
    </SessionProvider>
  );
} 