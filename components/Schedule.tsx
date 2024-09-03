'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
  GiAncientColumns,
  GiBriefcase,
  GiCardJoker,
  GiChalkOutlineMurder,
  GiCoffeeCup,
  GiCommercialAirplane,
  GiFamilyHouse,
  GiHand,
  GiMeal,
  GiPartyFlags,
  GiPerspectiveDiceSixFacesRandom,
  GiPresent,
  GiWireCoil,
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
  if (time > new Date('2023-05-21T07:00:00.000Z').getTime()) {
    defaultTab = 'sunday';
  } else if (time > new Date('2023-05-20T07:00:00.000Z').getTime()) {
    defaultTab = 'saturday';
  } else if (time > new Date('2023-05-19T07:00:00.000Z').getTime()) {
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
                time="Morning"
                title="Open gaming"
                icon={<GiCoffeeCup size="2em" />}
                iconColor="has-text-warning"
              />
              <ChooseGame
                time="9:00am"
                title="Let's Go to Japan or Freelancers"
                icon={<GiAncientColumns size="2em" />}
                iconColor="has-text-danger"
                games={[
                  {
                    id: 'letsgotojapan',
                    image: {
                      src: 'https://cf.geekdo-images.com/hRym3ngIdndJT2hhOURjMw__itemrep/img/wV4jfPjIen9T4CLhiSlcfeWoQtk=/fit-in/246x300/filters:strip_icc()/pic7414594.jpg',
                      width: 99,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/329551/mosaic-story-civilization',
                  },
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
                title="Big Top or Turing Machine"
                icon={<GiWireCoil size="2em" />}
                iconColor="has-text-grey-dark"
                games={[
                  {
                    id: 'bigtop',
                    image: {
                      src: 'https://cf.geekdo-images.com/_Y6g4FXjeolGkh2Uut0qaQ__itemrep/img/VBhCMJYvB9w-aT8l4bhtmmq2SsA=/fit-in/246x300/filters:strip_icc()/pic7133667.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/369899/big-top',
                  },
                  {
                    id: 'turingmachine',
                    image: {
                      src: 'https://cf.geekdo-images.com/un5yundwtC6q1U9gWTY8Yw__itemrep/img/dmF4UID5Nz-j_7Pfd1rnQTukUD8=/fit-in/246x300/filters:strip_icc()/pic6883492.png',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/356123/turing-machine',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="5:00pm"
                title="Open Gaming"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
                iconColor="has-text-link"
              />
              <ScheduleItem
                time="6:30pm"
                title="Dinner and Murder"
                icon={<GiChalkOutlineMurder size="2em" />}
              >
                How to Host a Murder: The Last Train from Paris
              </ScheduleItem>
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-success"
              />
            </>
          )}
          {selectedTab === 'sunday' && (
            <>
              <ScheduleItem
                time="Morning"
                title="Open Gaming"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-danger"
              />
              <ScheduleItem
                time="12:00pm"
                title="Take Mark, Erin, Jesse, and Mary Elizabeth back to the airport"
                icon={<GiCommercialAirplane size="2em" />}
              />
              <ScheduleItem
                time="Any time left"
                title="Open Gaming"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
                iconColor="has-text-link"
              />
              <ScheduleItem
                time="???"
                title="Pick up kids from Meemah and Meepah's house"
                icon={<GiFamilyHouse size="2em" />}
              >
                Maybe they will drop them off? We haven&apos;t actually planned
                this far. Are you still reading this?
              </ScheduleItem>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Schedule;
