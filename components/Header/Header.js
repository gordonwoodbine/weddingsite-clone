import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Box, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import { useRouter } from 'next/router';
import { routes } from '../../routes/routes';
import MobileNav from '../MobileNav';
import Link from 'next/link';

const Header = (props) => {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (route) => {
    if (router.pathname === route.path) return;
    router.push(route.path);
  };

  return (
    <Box sx={{ display: 'flex', position: 'sticky', 'z-index': 1, top: 0 }}>
      <AppBar
        position='static'
        component='nav'
        elevation={0}
        sx={{
          backgroundColor: 'background.primary',
          borderBottom: '1px solid #914555',
          alignItems: { xs: 'left', sm: 'center' },
          height: '4rem',
        }}
      >
        <Toolbar disableGutters>
          <IconButton
            // color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ color: 'primary.main', mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.map((route) => (
              <Link href={route.path} scroll={false} key={route.id}>
                <Button
                  startIcon={route.icon}
                  sx={{
                    color: '#333',
                  }}
                >
                  {route.name}
                </Button>
              </Link>
            ))}
            {session && (
              <Button
                startIcon={<AdminIcon />}
                onClick={() => router.push('/admin')}
                sx={{
                  color: '#333',
                  textDecoration:
                    router.pathname === '/admin' ? 'underline' : 'none',
                }}
              >
                Admin
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Nav Component */}
      <Box component='nav'>
        <MobileNav
          mobileOpen={mobileOpen}
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>

      {/* <Box>
        <Toolbar />
      </Box> */}
    </Box>
  );
};
export default Header;
