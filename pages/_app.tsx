/* eslint-disable react/jsx-props-no-spreading */
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../src/styles/globalStyles';
import useTheme from '../src/styles/hooks/useTheme';
import mode from '../src/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [theme ] = useTheme();

  return (
    <ThemeProvider theme={mode[theme]}>
      <Global styles={GlobalStyles}/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
