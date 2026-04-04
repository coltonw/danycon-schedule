'use client';

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
  GiFamilyHouse,
  GiGhost,
  GiMeal,
  GiPartyFlags,
  GiPerspectiveDiceSixFacesRandom,
  GiPresent,
  GiSpookyHouse,
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
  // We use 3am EDT (7am UTC) to mark the start of the next danycon day
  if (time > new Date('2026-04-12T07:00:00.000Z').getTime()) {
    defaultTab = 'sunday';
  } else if (time > new Date('2026-04-11T07:00:00.000Z').getTime()) {
    defaultTab = 'saturday';
  } else if (time > new Date('2026-04-10T07:00:00.000Z').getTime()) {
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
              title="Arrivals"
              date="April 10"
            />
          </li>
          <li className={`${selectedTab === 'friday' ? 'is-active' : ''}`}>
            <ScheduleTab id="friday" title="Friday" date="April 10" />
          </li>
          <li className={`${selectedTab === 'saturday' ? 'is-active' : ''}`}>
            <ScheduleTab id="saturday" title="Saturday" date="April 11" />
          </li>
          <li className={`${selectedTab === 'sunday' ? 'is-active' : ''}`}>
            <ScheduleTab id="sunday" title="Sunday" date="April 12" />
          </li>
        </ul>
      </div>
      <section className="section">
        <div className="container">
          {selectedTab === 'predanycon' && (
            <>
              <ScheduleItem
                time="Friday, April 10th, 3:10pm"
                title="Jesse and Mary Elizabeth arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-success"
              >
                Boston Logan Airport — Flight 541. Leaves Monday April 13th,
                Flight 872 at 3:50pm.
              </ScheduleItem>
              <ScheduleItem
                time="Friday, April 10th, 3:40pm"
                title="Mandy and Bailey arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-warning"
              >
                Boston Logan Airport. Leaves Monday at 5pm. We can probably
                pick up all four at once — airport is about 1 hour away!
              </ScheduleItem>
              <ScheduleItem
                time="Friday, April 10th, TBD"
                title="Mark arrives"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-link"
              >
                Trying to arrive Friday around the same time as everyone else.
                Details TBD.
              </ScheduleItem>
              <ScheduleItem
                time="Saturday, April 11th, night"
                title="Erin arrives"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-danger"
              >
                Flying standby — exact flight details unknown until last minute.
                Time TBD.
              </ScheduleItem>
            </>
          )}
          {selectedTab === 'friday' && (
            <>
              <ScheduleItem
                time="Afternoon"
                title="Party favors and welcome!"
                icon={<GiPresent size="2em" />}
                iconColor="has-text-link"
              >
                Everyone arrives from Boston Logan. 1 hour drive from the
                airport — see the Arrivals tab for flight details.
              </ScheduleItem>
              <ScheduleItem
                time="Evening"
                title="Open gaming"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
                iconColor="has-text-warning"
              >
                Break out the paranormal themed games while everyone settles in!
                Suggestions: Mysterium, Cryptid, Mansions of Madness, Gloom,
                Spectral, Destinies, Vagrantsong
              </ScheduleItem>
              <ScheduleItem
                time="Late evening"
                title="Alice is Missing (possibly)"
                icon={<GiGhost size="2em" />}
                iconColor="has-text-danger"
              >
                Indie RPG — we&apos;ll split into two groups. Erin can join
                remotely if we do it tonight! Could also move this to Sunday
                night.
              </ScheduleItem>
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiPartyFlags size="2em" />}
                iconColor="has-text-danger"
              />
            </>
          )}
          {selectedTab === 'saturday' && (
            <>
              <ScheduleItem
                time="9:00am – 11:00am"
                title="Julius's Pancake Breakfast"
                icon={<GiCoffeeCup size="2em" />}
                iconColor="has-text-warning"
              >
                Everyone heads to Julius&apos;s for pancakes. This block is
                reserved — no gaming scheduled during breakfast!
              </ScheduleItem>
              <ScheduleItem
                time="After breakfast"
                title="Daily word games and open gaming"
                icon={<GiBriefcase size="2em" />}
                iconColor="has-text-gray"
              >
                Paranormal themed open gaming suggestions: Mysterium, Cryptid,
                Mansions of Madness, Gloom, Spectral, Destinies, Vagrantsong
              </ScheduleItem>
              <ChooseGame
                time="11:30am (30 min)"
                title="Trinket Trove or Combo Up"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-link"
                games={[
                  {
                    id: 'trinkettrove',
                    image: {
                      src: 'https://cf.geekdo-images.com/OaULQMLUHwDrDszJsHK8pA__itemrep/img/fDLcmrXDILphaYqEOu1SNxEDuVE=/fit-in/246x300/filters:strip_icc()/pic8985794.jpg',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/436931/trinket-trove',
                  },
                  {
                    id: 'comboup',
                    image: {
                      src: 'https://cf.geekdo-images.com/Yna9fOZ8ZQeQdThHuLa76Q__itemrep/img/Kft_ojxV8NPhbOpr8jdNG8MJRDA=/fit-in/246x300/filters:strip_icc()/pic8349602.png',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/438452/combo-up',
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
                time="2:00pm (60 min)"
                title="Guildlands or Orbit"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
                iconColor="has-text-success"
                games={[
                  {
                    id: 'guildlands',
                    image: {
                      src: 'https://cf.geekdo-images.com/CSJCc5ujq4PktChkmLIcPg__itemrep/img/LmIFUCFKiBz32unaKz1ui1F3kQ4=/fit-in/246x300/filters:strip_icc()/pic8955025.jpg',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/447587/guildlands',
                  },
                  {
                    id: 'orbit',
                    image: {
                      src: 'https://cf.geekdo-images.com/0x7TCH7bCynSQqW3GVc8UA__itemrep/img/3FehhBN80nEO3VL5bm6gYqRPTPY=/fit-in/246x300/filters:strip_icc()/pic8478397.png',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/429767/orbit',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="3:30pm"
                title="Open gaming"
                icon={<GiGhost size="2em" />}
                iconColor="has-text-warning"
              >
                Paranormal themed open gaming suggestions: Mysterium, Cryptid,
                Mansions of Madness, Gloom, Spectral, Destinies, Vagrantsong
              </ScheduleItem>
              <ScheduleItem
                time="6:30pm"
                title="Dinner"
                icon={<GiMeal size="2em" />}
              />
              <ScheduleItem
                time="After dinner"
                title="Murder Mystery Dinner"
                icon={<GiChalkOutlineMurder size="2em" />}
              />
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiBalloons size="2em" />}
                iconColor="has-text-danger"
              >
                Erin also arrives sometime tonight (flying standby — TBD)!
              </ScheduleItem>
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
                Paranormal themed open gaming suggestions: Mysterium, Cryptid,
                Mansions of Madness, Gloom, Spectral, Destinies, Vagrantsong
              </ScheduleItem>
              <ChooseGame
                time="10:00am (90 min)"
                title="Etherfields or Cyclades"
                icon={<GiSpookyHouse size="2em" />}
                iconColor="has-text-warning"
                games={[
                  {
                    id: 'etherfields',
                    image: {
                      src: 'https://cf.geekdo-images.com/K1yVmbbWCsQuiWk-7x-V-Q__itemrep/img/sn5fNJYWUBD1DJ9pDpqxjkF6kcI=/fit-in/246x300/filters:strip_icc()/pic7455627.png',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/280794/etherfields',
                  },
                  {
                    id: 'cyclades',
                    image: {
                      src: 'https://cf.geekdo-images.com/6QbaJOS8acWkJ6gSYI0KaQ__itemrep/img/Yd9YB69mzV4X4e3zD6oX2H_ohik=/fit-in/246x300/filters:strip_icc()/pic584779.jpg',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/54998/cyclades',
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
                time="2:00pm (120 min)"
                title="Luthier or Puerto Rico Special Edition"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
                iconColor="has-text-link"
                games={[
                  {
                    id: 'luthier',
                    image: {
                      src: 'https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__itemrep/img/rFyVKpt-JhbahxmqTXGBa8heovg=/fit-in/246x300/filters:strip_icc()/pic8145392.png',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/371330/luthier',
                  },
                  {
                    id: 'puertorico',
                    image: {
                      src: 'https://cf.geekdo-images.com/ewNPD8vcrsXVfuVc9_E6hg__itemrep/img/tGk7IUtPVvPuoHu1xHd16SgKxsg=/fit-in/246x300/filters:strip_icc()/pic8376834.jpg',
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/415843/puerto-rico-1897-special-edition',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="Evening"
                title="Kids come home"
                icon={<GiFamilyHouse size="2em" />}
                iconColor="has-text-primary"
              />
              <ScheduleItem
                time="After kids' bedtime"
                title="Alice is Missing (if not done Friday)"
                icon={<GiGhost size="2em" />}
                iconColor="has-text-danger"
              >
                Indie RPG — split into two groups. People leave Monday so we
                can go as late as we want!
              </ScheduleItem>
              <ScheduleItem
                time="Late"
                title="Party Games"
                icon={<GiPartyFlags size="2em" />}
                iconColor="has-text-danger"
              >
                Last night — people leave Monday, so no curfew!
              </ScheduleItem>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Schedule;
