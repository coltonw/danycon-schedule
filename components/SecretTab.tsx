import Image from 'next/image';
import { GiHouse } from 'react-icons/gi';

const SecretTab = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <GiHouse size="2em" />
          <Image
            src="https://c.tenor.com/Vv2u6HCTvFQAAAAC/angry-eldorado.gif"
            width={294}
            height={266}
            alt="guitar"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <Image
            src="https://c.tenor.com/emak0-_Y_4UAAAAd/animation-movies.gif"
            width={606}
            height={640}
            alt="banging head"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SecretTab;
