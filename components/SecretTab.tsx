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
            width="294"
            height="266"
            layout="responsive"
            alt="guitar"
          />
          <Image
            src="https://c.tenor.com/emak0-_Y_4UAAAAd/animation-movies.gif"
            width="606"
            height="640"
            layout="responsive"
            alt="banging head"
          />
        </div>
      </div>
    </section>
  );
};

export default SecretTab;
