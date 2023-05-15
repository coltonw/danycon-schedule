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
  GiElephant,
  GiFamilyHouse,
  GiHand,
  GiHorseshoe,
  GiMagnifyingGlass,
  GiMeal,
  GiPartyFlags,
  GiPerspectiveDiceSixFacesRandom,
  GiPresent,
  GiTrophy,
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
              date="May 17 - 18"
            />
          </li>
          <li className={`${selectedTab === 'friday' ? 'is-active' : ''}`}>
            <ScheduleTab id="friday" title="Friday" date="May 19" />
          </li>
          <li className={`${selectedTab === 'saturday' ? 'is-active' : ''}`}>
            <ScheduleTab id="saturday" title="Saturday" date="May 20" />
          </li>
          <li className={`${selectedTab === 'sunday' ? 'is-active' : ''}`}>
            <ScheduleTab id="sunday" title="Sunday" date="May 21" />
          </li>
        </ul>
      </div>
      <section className="section">
        <div className="container">
          {selectedTab === 'predanycon' && (
            <>
              <ScheduleItem
                time="Wednesday, May 17"
                title="Mandy and Bailey arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-danger"
              ></ScheduleItem>
              <ScheduleItem
                time="Thursday, May 18, evening"
                title="Games with Mandy and Bailey"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
              >
                Bailey and Mandy get to pick!
              </ScheduleItem>
              <ScheduleItem
                time="Thursday, May 18, nightish"
                title="Mark and Erin arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-info"
              >
                No idea what time. It is a real mystery!!!
              </ScheduleItem>
              <ScheduleItem
                time="Thursday, May 18, 11:10pm"
                title="Jesse and Mary Elizabeth arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-success"
              >
                Will is going to pick them up. Flight is Southwest 3143.
              </ScheduleItem>
            </>
          )}
          {selectedTab === 'friday' && (
            <>
              <ScheduleItem
                time="Morning"
                title="Gift Bags"
                icon={<GiPresent size="2em" />}
                iconColor="has-text-link"
              />
              <ScheduleItem
                time="Daytime"
                title='"Work" and gaming'
                icon={<GiBriefcase size="2em" />}
                iconColor="has-text-warning"
              >
                Lexi, Mark, Mandy, and Will are taking the day off. Others are
                going to be working really hard 😉. One of the games we will
                play is this:
                <br />
                <Link href="https://boardgamegeek.com/boardgame/302723/forgotten-waters">
                  <Image
                    src="https://cf.geekdo-images.com/gLnzfyJio2MYbG9J-uQSiQ__itemrep/img/98jkfiTjNcRXVr58JG0IaFDKXuo=/fit-in/246x300/filters:strip_icc()/pic5253984.jpg"
                    width={128}
                    height={128}
                    alt="forgottenwaters"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Link>
              </ScheduleItem>
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
                title="Chronicles of Crime"
                icon={<GiMagnifyingGlass size="2em" />}
                iconColor="has-text-success"
              />
              <ChooseGame
                time="Night"
                title="KuZOOkA or Paleo"
                icon={<GiElephant size="2em" />}
                games={[
                  {
                    id: 'kazooka',
                    image: {
                      src: 'https://cf.geekdo-images.com/0b4mi9y_42CqJ5GFBFiNFA__itemrep/img/IQIeLfl6sFGch_TuysCy0lXyv5Q=/fit-in/246x300/filters:strip_icc()/pic6680096.jpg',
                      width: 87,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/356742/kuzooka',
                  },
                  {
                    id: 'paleo',
                    image: {
                      src: 'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink: 'https://boardgamegeek.com/boardgame/300531/paleo',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiPartyFlags size="2em" />}
                iconColor="has-text-danger"
              >
                <Link href="https://boardgamegeek.com/boardgame/246693/funky-chicken">
                  <Image
                    src="https://cf.geekdo-images.com/7AH1LKp4yNuK42hXuELxXA__itemrep/img/TvD46rh6VpxbKMwAMmaCs16U6cM=/fit-in/246x300/filters:strip_icc()/pic4256975.jpg"
                    width={128}
                    height={128}
                    alt="funkychicken"
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
                title="Mosaic or Lost Ruins of Arnak"
                icon={<GiAncientColumns size="2em" />}
                iconColor="has-text-danger"
                games={[
                  {
                    id: 'mosaic',
                    image: {
                      src: 'https://cf.geekdo-images.com/hRym3ngIdndJT2hhOURjMw__itemrep/img/wV4jfPjIen9T4CLhiSlcfeWoQtk=/fit-in/246x300/filters:strip_icc()/pic7414594.jpg',
                      width: 99,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/329551/mosaic-story-civilization',
                  },
                  {
                    id: 'lostruinsofarnak',
                    image: {
                      src: 'https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__itemrep/img/ETni1QwddAVjM-xLhciF0UM0FxQ=/fit-in/246x300/filters:strip_icc()/pic5674958.jpg',
                      width: 128,
                      height: 89,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/312484/lost-ruins-arnak',
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
                time="3:00pm"
                title="Ready Set Bet Prize Match"
                icon={<GiHorseshoe size="2em" />}
                iconColor="has-text-grey-light"
              />
              <ScheduleItem
                time="4:30pm"
                title="Prizes"
                icon={<GiTrophy size="2em" />}
                iconColor="has-text-primary"
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
                Maybe they will drop them off? We haven't actually planned this
                far. Are you still reading this?
              </ScheduleItem>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Schedule;
