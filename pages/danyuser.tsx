import type { NextPage } from 'next';
import Image from 'next/image';
import { GiHouse } from 'react-icons/gi';
import Hero from '../components/Hero';

const DanyUser: NextPage = () => {
  return (
    <>
      <Hero
        title="Scavenger Hunt"
        subtitle="Hey wait... Can dogs even type?"
        color="has-background-grey-lighter"
      />
      <section className="section">
        <div className="container">
          <GiHouse size="2em" />
          <Image
            src="https://c.tenor.com/yV-5c9MIhPAAAAAC/spiderman-climb.gif"
            width="498"
            height="249"
            layout="responsive"
            alt="spiderman"
          />
          <Image
            src="https://c.tenor.com/QRm7pJlKE3gAAAAC/sonar-campana-mortal-glitch.gif"
            width="498"
            height="280"
            layout="responsive"
            alt="spiderman"
          />
        </div>
      </section>
    </>
  );
};

export default DanyUser;
