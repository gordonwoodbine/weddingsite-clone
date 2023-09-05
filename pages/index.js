import FlipCountdown from '@rumess/react-flip-countdown';
import { useSession } from 'next-auth/react';
import Section from '../components/Section/Section';
import Timeline from './timeline';
import Location from './location';
import Accomodation from './accomodation';
import RSVP from './rsvp';
import Faq from './faq';

const Home = () => {
  return (
    <>
      <Section sectionId='home'>
        <div
          style={{
            backgroundImage: `url(/logo1.png)`,
            height: '100vh',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>
            YOU'RE INVITED TO CELEBRATE THE SYKES WEDDING!
          </h1>
          {/* <FlipCountdown
            size='medium'
            theme='dark'
            yearTitle=' '
            monthTitle=' '
            dayTitle=' '
            hourTitle=' '
            minuteTitle=' '
            secondTitle=' '
            endAt={'2024-06-29 00:00:00'} // Date/Time
          /> */}
        </div>
      </Section>

      <Section sectionId='location'>
        <Location />
      </Section>
      <Section sectionId='timeline'>
        <Timeline />
      </Section>
      <Section sectionId='accomodation'>
        <Accomodation />
      </Section>
      <Section sectionId='rsvp'>
        <RSVP />
      </Section>
      <Section sectionId='faq'>
        <Faq />
      </Section>
    </>
  );
};

export default Home;
