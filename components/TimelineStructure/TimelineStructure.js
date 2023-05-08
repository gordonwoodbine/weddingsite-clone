import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const events = [
  {
    time: '9:30 am',
    event: 'Eat',
  },
  {
    time: '10.00 am',
    event: 'Code',
  },
  {
    time: '11.00 am',
    event: 'Sleep',
  },
  {
    time: '12:00 pm',
    event: 'Repeat',
    icon: <FastfoodIcon />,
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
            {e.icon ? <TimelineDot color="primary">{e.icon}</TimelineDot> : <TimelineDot color="primary" />}
            {i !== events.length - 1 ? <TimelineConnector sx={{ bgcolor: 'primary.main' }} /> : null}
          </TimelineSeparator>
          <TimelineContent>{e.event}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
export default TimelineStructure;
