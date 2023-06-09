import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from '../components/Layout';

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
      secondary: '#bf7b75'
    },
    background: {
      primary: '#fff'
    }
  },
});

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default App;
