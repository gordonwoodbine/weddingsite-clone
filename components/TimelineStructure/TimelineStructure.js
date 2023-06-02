import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import GroupsIcon from '@mui/icons-material/Groups';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const events = [
  {
    time: '12:30',
    event: 'Guest Arrival',
    icon: <GroupsIcon color="secondary" />,
  },
  {
    time: '13:00',
    event: 'Ceremony',
    icon: <HistoryEduIcon color="secondary" />,
  },
  {
    time: '14:00',
    event: 'Photos and Drinks',
    icon: <PhotoCameraIcon color="secondary" />,
  },
  {
    time: '15:00',
    event: 'Wedding Breakfast',
    icon: <RestaurantIcon color="secondary" />,
  },
  {
    time: '18:30',
    event: 'Reception Guest Arrival',
    icon: <GroupsIcon color="secondary" />,
  },
  {
    time: '00:00',
    event: 'End',
    icon: <BedtimeIcon color="secondary" />,
  },
];


const TimelineStructure = () => {
  return (
    <Timeline position='alternate'>
      {events.map((e, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent color='text.secondary'>
            {e.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            {e.icon ? <TimelineDot color="primary" variant="outlined" >{e.icon}</TimelineDot> : <TimelineDot color="primary" />}
            {i !== events.length - 1 ? <TimelineConnector sx={{ bgcolor: 'primary.main' }} /> : null}
          </TimelineSeparator>
          <TimelineContent>{e.event}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
export default TimelineStructure;
