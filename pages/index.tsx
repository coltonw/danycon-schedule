import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Schedule from '../components/Schedule';

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title="Schedule"
        subtitle="Board gaming will commence in 3 2 1 ... Lift Off"
      />
      <Schedule />
    </>
  );
};

export default Home;
