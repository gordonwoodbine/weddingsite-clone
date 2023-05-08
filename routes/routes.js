import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpIcon from '@mui/icons-material/Help';
import HotelIcon from '@mui/icons-material/Hotel';

export const routes = [
  {
    id: 'home',
    path: '/',
    name: 'Home',
    icon: <HomeIcon />
  },
  {
    id: 'location',
    path: '/location',
    name: 'Location',
    icon: <LocationOnIcon />
  },
  {
    id: 'timeline',
    path: '/timeline',
    name: 'Timeline',
    icon: <TimelineIcon />
  },
  {
    id: 'accomodation',
    path: '/accomodation',
    name: 'Accomodation',
    icon: <HotelIcon />
  },
  {
    id: 'faq',
    path: '/faq',
    name: 'FAQs',
    icon: <HelpIcon />

  },
];
