import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Hero";

const ParanormalPage = () => {
  return (
    <>
      <Hero
        title="Paranormal Games"
        subtitle="Games that go bump in the night"
      />
      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="cell">
              <Link href="https://boardgamegeek.com/boardgame/181304/mysterium">
                <Image
                  src="https://cf.geekdo-images.com/1nQ3ZKudtDeAP7IiKE-kNg__itemrep/img/w_Dvb6hWYgSr_glCXZd3p6GqkTQ=/fit-in/246x300/filters:strip_icc()/pic8625343.jpg"
                  width={82}
                  height={100}
                  alt="Mysterium"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="cell">
              <Link href="https://boardgamegeek.com/boardgame/246784/cryptid">
                <Image
                  src="https://cf.geekdo-images.com/qrPLpAnhFgc470ZRuXlvbg__itemrep/img/z6MdPedVOUZ3rKOu7513i3D9fnY=/fit-in/246x300/filters:strip_icc()/pic4037705.jpg"
                  width={82}
                  height={100}
                  alt="Cryptid"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="cell">
              <Link href="https://boardgamegeek.com/boardgame/205059/mansions-of-madness-second-edition">
                <Image
                  src="https://cf.geekdo-images.com/LIooA9bTdjnE9qmhjL-UFw__itemrep/img/G_-z236LOfeZMfomDg5oPNJvyrg=/fit-in/246x300/filters:strip_icc()/pic3118622.jpg"
                  width={82}
                  height={100}
                  alt="Mansions of Madness"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="cell">
              <Link href="https://boardgamegeek.com/boardgame/12692/gloom">
                <Image
                  src="https://cf.geekdo-images.com/jD7_Ir8gL_9AXC-wjnqjHg__itemrep/img/TrY9FNVXHtplKsxn2pr4xvGCq0w=/fit-in/246x300/filters:strip_icc()/pic2080481.jpg"
                  width={82}
                  height={100}
                  alt="Gloom"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="cell">
              <Link href="https://boardgamegeek.com/boardgame/285192/destinies">
                <Image
                  src="https://cf.geekdo-images.com/oaD1ZQ3yGj6lacLdtqgdnQ__itemrep/img/hrN6o3gcBAhPaQyOhQT_n5dJ1hI=/fit-in/246x300/filters:strip_icc()/pic5558118.png"
                  width={82}
                  height={100}
                  alt="Destinies"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="cell">
              <Link href="https://boardgamegeek.com/boardgame/340325/vagrantsong">
                <Image
                  src="https://cf.geekdo-images.com/ZCyi6vHQz8SQtCq-OFHofg__itemrep/img/oRN_fslKH94BQL97-2KwFspJDC8=/fit-in/246x300/filters:strip_icc()/pic6221727.jpg"
                  width={82}
                  height={100}
                  alt="Vagrantsong"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="cell">
              <Link href="https://boardgamegeek.com/boardgame/388476/spectral">
                <Image
                  src="https://cf.geekdo-images.com/m1r9KXSdtK8UDU54InCCYg__itemrep/img/GwQfcTRZDnafYTMKl8EP_66sIIU=/fit-in/246x300/filters:strip_icc()/pic7515218.png"
                  width={82}
                  height={100}
                  alt="Spectral"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p>
            If you run out of paranormal games,{" "}
            <Link href="https://geekgroup.app/users/dagreenmachine/collection">
              here is Will&apos;s entire collection
            </Link>{" "}
            for more options!
          </p>
        </div>
      </section>
    </>
  );
};

export default ParanormalPage;
