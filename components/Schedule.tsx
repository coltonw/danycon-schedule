'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
  GiAirplane,
  GiBalloons,
  GiBriefcase,
  GiCardJoker,
  GiChalkOutlineMurder,
  GiCoffeeCup,
  GiCommercialAirplane,
  GiDoubleDragon,
  GiFamilyHouse,
  GiFlyingFlag,
  GiHand,
  GiKnightBanner,
  GiLaurels,
  GiLion,
  GiMayanPyramid,
  GiMeal,
  GiMountedKnight,
  GiPartyFlags,
  GiPerspectiveDiceSixFacesRandom,
  GiPresent,
  GiTigerHead,
} from 'react-icons/gi';
import { ScheduleData } from '../lib/types';
import ChooseGame from './ChooseGame';
import ScheduleItem from './ScheduleItem';
import ScheduleTab from './ScheduleTab';

const Schedule = ({
  gamesJoined: initialGamesJoined,
  participants: initialParticipants,
}: ScheduleData) => {
  const searchParams = useSearchParams();
  const [participants, setParticipants] = useState(initialParticipants);
  const [gamesJoined, setGamesJoined] = useState(initialGamesJoined);
  let defaultTab = 'predanycon';
  const time = new Date().getTime();
  // We use 3am (7am utc) to mark the start of the next danycon day
  if (time > new Date('2024-09-08T07:00:00.000Z').getTime()) {
    defaultTab = 'sunday';
  } else if (time > new Date('2024-09-07T07:00:00.000Z').getTime()) {
    defaultTab = 'saturday';
  } else if (time > new Date('2024-09-06T07:00:00.000Z').getTime()) {
    defaultTab = 'friday';
  }
  const selectedTab =
    searchParams?.get('tab') !== 'predanycon' &&
    searchParams?.get('tab') !== 'friday' &&
    searchParams?.get('tab') !== 'saturday' &&
    searchParams?.get('tab') !== 'sunday'
      ? defaultTab
      : searchParams?.get('tab');

  const updateData = ({ gamesJoined: gJ, participants: p }: ScheduleData) => {
    setParticipants(p);
    setGamesJoined(gJ);
  };
  return (
    <>
      <div className="tabs is-centered mb-0">
        <ul>
          <li className={`${selectedTab === 'predanycon' ? 'is-active' : ''}`}>
            <ScheduleTab
              id="predanycon"
              title="Pre-Danycon"
              date="September 4-5"
            />
          </li>
          <li className={`${selectedTab === 'friday' ? 'is-active' : ''}`}>
            <ScheduleTab id="friday" title="Friday" date="September 6" />
          </li>
          <li className={`${selectedTab === 'saturday' ? 'is-active' : ''}`}>
            <ScheduleTab id="saturday" title="Saturday" date="September 7" />
          </li>
          <li className={`${selectedTab === 'sunday' ? 'is-active' : ''}`}>
            <ScheduleTab id="sunday" title="Sunday" date="September 8" />
          </li>
        </ul>
      </div>
      <section className="section">
        <div className="container">
          {selectedTab === 'predanycon' && (
            <>
              <ScheduleItem
                time="Thursday, September 5th, 8:00pm"
                title="Mandy and Bailey arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-warning"
              ></ScheduleItem>
              <ScheduleItem
                time="Thursday, September 5th, sometime"
                title="Mark and Erin possibly arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-danger"
              ></ScheduleItem>
              <ScheduleItem
                time="Thursday, September 5th, 10:50pm"
                title="Jesse and Mary Elizabeth arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-success"
              ></ScheduleItem>
            </>
          )}
          {selectedTab === 'friday' && (
            <>
              <ScheduleItem
                time="Morning"
                title="Party favors and daily word games"
                icon={<GiPresent size="2em" />}
                iconColor="has-text-link"
              >
                Mark and Erin have made NYT style word games for each Danycon
                day. Here are the games for Friday:
                <br />
                <ul>
                  <li>
                    <Link href="https://mywordle.strivemath.com/?word=ycijt">
                      Wordle
                    </Link>
                  </li>
                  <li>
                    <Link href="https://connections.swellgarfo.com/game/-O61yZa3DrIV7go9GH3b">
                      Connections
                    </Link>
                  </li>
                  <li>
                    <Link href="https://customstrandsnyt.com/play/HeyGoodLookin-/">
                      Strands
                    </Link>
                  </li>
                </ul>
              </ScheduleItem>
              <ScheduleItem
                time="Daytime"
                title='"Work" and painting'
                icon={<GiBriefcase size="2em" />}
                iconColor="has-text-warning"
              ></ScheduleItem>
              <ScheduleItem
                time="Early evening"
                title="Ann and Ed visit"
                icon={<GiHand size="2em" />}
                iconColor="has-text-danger"
              >
                Ann and Ed will be dropping by to say hi to everyone and pick up
                Julius and Patricia.
              </ScheduleItem>
              <ScheduleItem
                time="Late evening"
                title="Dinner and Murder"
                icon={<GiChalkOutlineMurder size="2em" />}
              >
                How to Host a Murder: Maiming of the Shrew
              </ScheduleItem>
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiPartyFlags size="2em" />}
                iconColor="has-text-danger"
              >
                <Link href="https://boardgamegeek.com/boardgame/408547/things-in-rings">
                  <Image
                    src="https://cf.geekdo-images.com/oNmUB9qyfDYwUlzwrl9hZQ__itemrep/img/OPpXy1LxRR8S1hdjf1jd9KavXX8=/fit-in/246x300/filters:strip_icc()/pic8037086.jpg"
                    width={128}
                    height={128}
                    alt="thingsinrings"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Link>
              </ScheduleItem>
            </>
          )}
          {selectedTab === 'saturday' && (
            <>
              <ScheduleItem
                time="Early morning"
                title="Daily word games and open gaming"
                icon={<GiCoffeeCup size="2em" />}
                iconColor="has-text-gray"
              >
                Saturday word games:
                <br />
                <ul>
                  <li>
                    <Link href="https://mywordle.strivemath.com/?word=codhc">
                      Wordle
                    </Link>
                  </li>
                  <li>
                    <Link href="https://connections.swellgarfo.com/game/-O61vAd5alJcNvYWfZW3">
                      Connections
                    </Link>
                  </li>
                  <li>
                    <Link href="https://customstrandsnyt.com/play/GoodKnight/">
                      Strands
                    </Link>
                  </li>
                </ul>
              </ScheduleItem>
              <ChooseGame
                time="9:00am"
                title="Let's Go to Japan or First in Flight"
                icon={<GiAirplane size="2em" />}
                iconColor="has-text-link"
                games={[
                  {
                    id: 'letsgotojapan',
                    image: {
                      src: 'https://cf.geekdo-images.com/OvhEUaF43CIjSFz8aF_yzQ__itemrep/img/oeWGeR5i9GMih_zL10x97Ctjh8E=/fit-in/246x300/filters:strip_icc()/pic6996891.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/368173/lets-go-to-japan',
                  },
                  {
                    id: 'firstinflight',
                    image: {
                      src: 'https://cf.geekdo-images.com/NowJcoT3uCC9LJXjYaAXkw__itemrep/img/uJPUHWUAacyfuEAAYnm_ThmdZCQ=/fit-in/246x300/filters:strip_icc()/pic7518155.png',
                      width: 98,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/361788/first-in-flight',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="12:30pm"
                title="Lunch"
                icon={<GiMeal size="2em" />}
              />
              <ChooseGame
                time="2:00pm"
                title="Caesar's Empire or Spectral"
                icon={<GiLaurels size="2em" />}
                iconColor="has-text-success"
                games={[
                  {
                    id: 'caesarsempire',
                    image: {
                      src: 'https://cf.geekdo-images.com/K55c5g1QUyh5vhtQbI0hxQ__itemrep/img/9wq8izQ6193wR_qaKdbFrnz1yqE=/fit-in/246x300/filters:strip_icc()/pic6253596.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/341496/caesars-empire',
                  },
                  {
                    id: 'spectral',
                    image: {
                      src: 'https://cf.geekdo-images.com/m1r9KXSdtK8UDU54InCCYg__itemrep/img/GwQfcTRZDnafYTMKl8EP_66sIIU=/fit-in/246x300/filters:strip_icc()/pic7515218.png',
                      width: 102,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/388476/spectral',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="3:30pm"
                title="Medieval Gaming"
                icon={<GiMountedKnight size="2em" />}
                iconColor="has-text-gray"
              >
                <Link href="/medieval">
                  Check out the list of medieval games here
                </Link>
              </ScheduleItem>
              <ScheduleItem
                time="6:30pm"
                title="Dinner"
                icon={<GiMeal size="2em" />}
              />
              <ScheduleItem
                time="After dinner"
                title="Dungeons, but also Dragons"
                icon={<GiDoubleDragon size="2em" />}
                iconColor="has-text-success"
              ></ScheduleItem>
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-danger"
              />
            </>
          )}
          {selectedTab === 'sunday' && (
            <>
              <ScheduleItem
                time="Early morning"
                title="Daily word games and open gaming"
                icon={<GiCoffeeCup size="2em" />}
                iconColor="has-text-gray"
              >
                Sunday word games:
                <br />
                <ul>
                  <li>
                    <Link href="https://mywordle.strivemath.com/?word=dcsej">
                      Wordle
                    </Link>
                  </li>
                  <li>
                    <Link href="https://connections.swellgarfo.com/game/-O624zGPraBFBXfmrjoy">
                      Connections
                    </Link>
                  </li>
                  <li>
                    <Link href="https://customstrandsnyt.com/play/YourTurn!/">
                      Strands
                    </Link>
                  </li>
                </ul>
              </ScheduleItem>
              <ChooseGame
                time="9:00am"
                title="Forbidden Jungle or Zoo Vadis"
                icon={<GiTigerHead size="2em" />}
                iconColor="has-text-warning"
                games={[
                  {
                    id: 'forbiddenjungle',
                    image: {
                      src: 'https://cf.geekdo-images.com/mF_cPPO9WU4DaYGJCzEw4g__itemrep/img/vuCxbttZuHbLnIqvPg1X6c2AjRE=/fit-in/246x300/filters:strip_icc()/pic7594347.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/380226/forbidden-jungle',
                  },
                  {
                    id: 'zoovadis',
                    image: {
                      src: 'https://cf.geekdo-images.com/Kl3NjtNKpuJNPjdBQtdsow__itemrep/img/mmVsnLtn3T4zkeNbjWpfrWZKS5c=/fit-in/246x300/filters:strip_icc()/pic6988937.jpg',
                      width: 91,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/368061/zoo-vadis',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="12:30pm"
                title="Lunch"
                icon={<GiMeal size="2em" />}
              />
              <ScheduleItem
                time="2:00pm"
                title="Challengers! Beach Cup"
                icon={<GiFlyingFlag size="2em" />}
                iconColor="has-text-danger"
              >
                <Link href="https://boardgamegeek.com/boardgame/390340/challengers-beach-cup">
                  <Image
                    src="https://cf.geekdo-images.com/QZWrLoOoruqb0YRDQT-jng__itemrep/img/OPYajJmfXFupH9xQmVlDW1eZ5qo=/fit-in/246x300/filters:strip_icc()/pic7683878.png"
                    width={128}
                    height={128}
                    alt="challengers"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Link>
              </ScheduleItem>
              <ScheduleItem
                time="???"
                title="Somehow recieve kids back from Meemah and Meepah's house"
                icon={<GiFamilyHouse size="2em" />}
                iconColor="has-text-primary"
              >
                Maybe they will drop them off? We haven&apos;t actually planned
                this.
              </ScheduleItem>
              <ScheduleItem
                time="6:30pm"
                title="Dinner"
                icon={<GiMeal size="2em" />}
              />
              <ChooseGame
                time="After dinner"
                title="Freelancers or Faiyum"
                icon={<GiKnightBanner size="2em" />}
                iconColor="has-text-link"
                games={[
                  {
                    id: 'freelancers',
                    image: {
                      src: 'https://cf.geekdo-images.com/DuZnEeI06_5UKpv4t28Kyg__itemrep/img/CYFNZ0Dxl0tCy_Il6-Jwcptrt3M=/fit-in/246x300/filters:strip_icc()/pic7429703.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/383206/freelancers-a-crossroads-game',
                  },
                  {
                    id: 'faiyum',
                    image: {
                      src: 'https://cf.geekdo-images.com/sl0ReaWGqY1LQjNoGtCPWg__itemrep/img/ejMNE7rT_oZjR8a5DHQ_4UBP6Qk=/fit-in/246x300/filters:strip_icc()/pic5638086.jpg',
                      width: 94,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/318983/faiyum',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiBalloons size="2em" />}
                iconColor="has-text-danger"
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Schedule;
