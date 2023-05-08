import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from '../components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8C4646',
    },
  },
});


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
