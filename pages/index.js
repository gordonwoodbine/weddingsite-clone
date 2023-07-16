import FlipCountdown from '@rumess/react-flip-countdown';
import { useSession } from 'next-auth/react';
import Section from '../components/Section/Section';
import Timeline from './timeline';
import RSVP from './rsvp';

const Home = () => {
  return (
    <>
      {/* <div style={{
      backgroundImage: `url(/rocco1.jpg)`,
      height: '100vh',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>


      <h1>Home Page</h1>
      <FlipCountdown
        size='medium'
        theme='dark'
        yearTitle=' '
        monthTitle=' '
        dayTitle=' '
        hourTitle=' '
        minuteTitle=' '
        secondTitle=' '
        endAt={'2024-06-29 00:00:00'} // Date/Time
      />
    </div>

      <Section sectionId='home'>
        <div>I love HTML</div>
      </Section>
      {/* <div
        id='accomodation'
        style={{ 'padding-top': '60px', minHeight: '100vh' }}
      >
        {' '}
        I love CSS{' '}
      </div>
      <div id='timeline' style={{ minHeight: '100vh' }}>
        {' '}
        <Timeline />
      </div> */}
      <Section sectionId='rsvp'>
        <RSVP />
      </Section>
    </>
  );
};

export default Home;
