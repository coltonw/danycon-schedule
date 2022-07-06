import type { NextPage } from 'next';
import Image from 'next/image';
import { GiHouse } from 'react-icons/gi';
import Hero from '../components/Hero';

const IsaacUser: NextPage = () => {
  return (
    <>
      <Hero
        title="Scavenger Hunt"
        subtitle="Welcome Isaac Asimov!"
        color="has-background-grey-lighter"
      />
      <section className="section">
        <div className="container">
          <GiHouse size="2em" />
          <Image
            src="https://c.tenor.com/97woIIlSiGYAAAAC/merlot-sideways.gif"
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
