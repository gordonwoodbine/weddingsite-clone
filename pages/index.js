import FlipCountdown from '@rumess/react-flip-countdown';
import { useSession } from 'next-auth/react';
import Section from '../components/Section/Section'
import Timeline from './timeline';
import Accomodation from './Accomodation';
import RSVP from './rsvp';
import Location from './location'
import Faq from './faq'

const Home = () => {
  return (
    
    <>
    <div id="home" style={{
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



<div style={{'scrollBehaviour': 'smooth !important' }}> 
{/* <div style={{'scroll-snap-type': 'y mandatory', 'overflow-y': 'scroll',minHeight: '100vh' }}>*/}

    <div id="location" style={{'padding-top': '60px', minHeight: '100vh'}} > <Location/></div>
    <div id="timeline" style={{'padding-top': '60px', minHeight: '100vh'}} > <Timeline/></div>
    <div id="accomodation" style={{'padding-top': '60px', minHeight: '100vh'}}> <Accomodation/></div>
    <div id="rsvp" style={{ 'scroll-snap-align': 'start', 'padding-top': '60px', minHeight: '100vh'}}> <RSVP/> </div>
    <div id="faq" style={{ 'scroll-snap-align': 'start', 'padding-top': '60px', minHeight: '100vh'}}> <Faq/> </div>

     {/* <Section sectionId="location">
      <Location/>
     </Section> */}
     </div>


    </>
  );
};

export default Home;
