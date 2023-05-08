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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
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
        sx={{ backgroundColor: "background.primary", borderBottom: '1px solid #592828', alignItems: { xs: 'left', sm: 'center' } }}
      >
        <Toolbar disableGutters>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ color: 'primary.main', mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.map((route) => (
              <Button
                startIcon={route.icon}
                key={route.id}
                onClick={() => router.push(route.path)}
                sx={{
                  color: 'primary.main',
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
          //  container={container}
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
