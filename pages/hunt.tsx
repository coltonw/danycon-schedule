import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';

const Hunt: NextPage = () => {
  return (
    <>
      <Hero
        title="Scavenger Hunt"
        subtitle={
          <>
            The game is{' '}
            <Link href="/afoot" className="is-not-clickable-text has-text-dark">
              afoot
            </Link>
            !
          </>
        }
        color="has-background-grey-lighter"
      />
      <section className="section">
        <div className="container">
          <p className="is-size-5 has-text-centered mb-1">But which game?</p>
          <Image
            src="https://c.tenor.com/67EGa-wMf5MAAAAC/sherlock-benedict-cumberbatch.gif"
            width={426}
            height={428}
            alt="sherlock gif"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hunt;
