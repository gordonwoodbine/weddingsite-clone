import FlipCountdown from '@rumess/react-flip-countdown';
import { useSession } from 'next-auth/react';

const Home = () => {
  return (
    <div style={{
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
  );
};

export default Home;
