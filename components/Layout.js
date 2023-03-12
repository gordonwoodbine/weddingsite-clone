import { Container } from '@mui/material';
import Header from './Header/';

const Layout = ({ children }) => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Header />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
