import MuiTimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';

const TimelineItem = ({ leftContent, rightContent }) => {
  return (
    <MuiTimelineItem>
      <TimelineOppositeContent color='text.secondary'>
        {leftContent}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{rightContent}</TimelineContent>
    </MuiTimelineItem>
  );
};
export default TimelineItem;
