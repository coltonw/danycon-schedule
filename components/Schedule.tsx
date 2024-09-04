'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
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
                time="Wednesday, September 4th, sometime"
                title="Mark possibly arrives"
                icon={<GiCommercialAirplane size="2em" />}
              />
              <ScheduleItem
                time="Thursday, September 5th, sometime"
                title="Erin possibly arrives"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-danger"
              ></ScheduleItem>
              <ScheduleItem
                time="Thursday, September 5th, 4:30pm"
                title="Mandy and Bailey arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-warning"
              ></ScheduleItem>
              <ScheduleItem
                time="Thursday, September 5th, evening"
                title="Games with folks who are here"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
              >
                Guests get to pick the game!
              </ScheduleItem>
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
                title="Party favors"
                icon={<GiPresent size="2em" />}
                iconColor="has-text-link"
              />
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
                title="Open gaming"
                icon={<GiCoffeeCup size="2em" />}
                iconColor="has-text-gray"
              />
              <ChooseGame
                time="9:00am"
                title="Let's Go to Japan or World Wonders"
                icon={<GiMayanPyramid size="2em" />}
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
                    id: 'worldwonders',
                    image: {
                      src: 'https://cf.geekdo-images.com/GGi5aUL1dVQIrytxgXow4g__itemrep/img/cuDfJpNjCJQrNjJ4CL80U4u72B4=/fit-in/246x300/filters:strip_icc()/pic7604558.png',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/365258/world-wonders',
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
                title="Harmonies or Spectral"
                icon={<GiLion size="2em" />}
                iconColor="has-text-warning"
                games={[
                  {
                    id: 'harmonies',
                    image: {
                      src: 'https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__itemrep/img/wGng6fVAYRI5NKBX6x-pksZKJGI=/fit-in/246x300/filters:strip_icc()/pic8026369.png',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/414317/harmonies',
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
                title="Open gaming"
                icon={<GiCoffeeCup size="2em" />}
                iconColor="has-text-gray"
              />
              <ChooseGame
                time="9:00am"
                title="In the Footsteps of Darwin or Zoo Vadis"
                icon={<GiTigerHead size="2em" />}
                iconColor="has-text-warning"
                games={[
                  {
                    id: 'inthefootstepsofdarwin',
                    image: {
                      src: 'https://cf.geekdo-images.com/1KPQC8pVuTXL32RdbTxDjw__itemrep/img/qERM9Gdsk2NVgdiN1HhD9pC5vDg=/fit-in/246x300/filters:strip_icc()/pic7234392.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/376683/in-the-footsteps-of-darwin',
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
                title="Somehow recieve kids bach from Meemah and Meepah's house"
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
