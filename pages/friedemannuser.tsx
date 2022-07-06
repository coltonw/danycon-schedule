import type { NextPage } from 'next';
import Image from 'next/image';
import { GiHouse } from 'react-icons/gi';
import Hero from '../components/Hero';

const IsaacUser: NextPage = () => {
  return (
    <>
      <Hero
        title="Scavenger Hunt"
        subtitle="Welcome Friedemann Friese!"
        color="has-background-success"
      />
      <section className="section">
        <div className="container">
          <GiHouse size="2em" />
          <Image
            src="https://c.tenor.com/IBWhNL68mWMAAAAd/its-a-small-world-disneyland.gif"
            width="476"
            height="256"
            layout="responsive"
            alt="sideways"
          />
        </div>
      </section>
    </>
  );
};

export default IsaacUser;
