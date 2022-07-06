import { useRouter } from 'next/router';
import Image from 'next/image';
import Hero from './Hero';

const SecretTab = () => {
  return (
    <>
      <Hero
        title="Scavenger Hunt"
        subtitle="The game is afoot!"
        color="has-background-grey-lighter"
      />
      <section className="section">
        <div className="container">
          <p className="is-size-5 has-text-centered mb-1">But which game?</p>
          <Image
            src="https://c.tenor.com/67EGa-wMf5MAAAAC/sherlock-benedict-cumberbatch.gif"
            width="426"
            height="428"
            layout="responsive"
            alt="sherlock gif"
          />
        </div>
      </section>
    </>
  );
};

export default SecretTab;
