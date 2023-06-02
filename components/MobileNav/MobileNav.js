import {
  Box,
  Divider,
  Drawer as DrawerWrapper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
const drawerWidth = 240;

const Drawer = ({ handleDrawerToggle, routes, router }) => (
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

const MobileNav = ({ mobileOpen, routes, handleDrawerToggle }) => {
  const router = useRouter();
  return (
    <DrawerWrapper
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
      <Drawer
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        router={router}
      />
    </DrawerWrapper>
  );
};

export default MobileNav;
