import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import Layout from '../components/Layout';
import createEmotionCache from '../utils/createEmotionCache';
import '../styles/global.css';

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    primary: {
      main: '#8C4646',
    },
    secondary: {
      main: '#D9B8B8',
    },
    text: {
      primary: '#592828',
      secondary: '#bf7b75',
    },
    background: {
      primary: '#FDFDFD',
    },
  },
});

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  );
};

export default App;
