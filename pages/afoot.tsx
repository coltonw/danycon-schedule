import type { NextPage } from 'next';
import Image from 'next/image';
import { GiCube, GiHouse } from 'react-icons/gi';
import { FiWifi } from 'react-icons/fi';
import Hero from '../components/Hero';

const Hunt: NextPage = () => {
  return (
    <>
      <Hero
        title="Scavenger Hunt"
        subtitle="Some rules and your next clue"
        color="has-background-grey-lighter"
      />
      <section className="section">
        <div className="container">
          <div className="content">
            <p>
              Clues will be for a board game (
              <span className="icon">
                <GiCube />
              </span>
              ), a place in the house (
              <span className="icon">
                <GiHouse />
              </span>
              ), or for somewhere on the internet (
              <span className="icon">
                <FiWifi />
              </span>
              ).
            </p>
            <p>
              Please do not inspect source code of this website looking for
              website clues. Also, no clicking anything and everything or
              looking in random board games or generally doing things against
              the spirit of the game.
            </p>
            <GiHouse size="2em" />
            <Image
              src="https://c.tenor.com/Irq9bIGi_gsAAAAC/drunk-fantasia.gif"
              width={332}
              height={252}
              alt="drunk"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hunt;
