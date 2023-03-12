import { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { routes } from '../../routes/routes';

const drawerWidth = 240;

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  console.log('router', router);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Wedding, Innit?
      </Typography>
      <Divider />
      <List>
        {routes.map((route) => (
          <ListItem
            key={route.id}
            onClick={() => router.push(route.path)}
            disablePadding
          >
            <ListItemButton
              sx={{
                textAlign: 'center',
                textDecoration:
                  router.pathname === route.path ? 'underline' : 'none',
              }}
            >
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='static'
        component='nav'
        elevation={0}
        sx={{ backgroundColor: 'white', borderBottom: '1px solid #333' }}
      >
        <Toolbar disableGutters>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Wedding, Innit?
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.map((route) => (
              <Button
                key={route.id}
                onClick={() => router.push(route.path)}
                sx={{
                  color: '#333',
                  textDecoration:
                    router.pathname === route.path ? 'underline' : 'none',
                }}
              >
                {route.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};
export default Header;
