import { useRouter } from 'next/router';
import ScheduleTab from './ScheduleTab';
import ScheduleItem from './ScheduleItem';
import ChooseGame from './ChooseGame';
import {
  GiCardJoker,
  GiCakeSlice,
  GiFairy,
  GiLaserSparks,
  GiMushroomHouse,
  GiRaining,
  GiCookie,
  GiFamilyHouse,
  GiPerspectiveDiceSixFacesRandom,
  GiMeal,
  GiPhotoCamera,
  GiBeerStein,
  GiChalkOutlineMurder,
  GiElephant,
  GiClover,
  GiCommercialAirplane,
  GiSherlockHolmes,
  GiPartyFlags,
  GiSunglasses,
} from 'react-icons/gi';
import { ScheduleData } from '../lib/types';
import { useState } from 'react';

const Schedule = ({
  gamesJoined: initialGamesJoined,
  participants: initialParticipants,
}: ScheduleData) => {
  const { query } = useRouter();
  const [participants, setParticipants] = useState(initialParticipants);
  const [gamesJoined, setGamesJoined] = useState(initialGamesJoined);
  const selectedTab =
    query.tab !== 'saturday' && query.tab !== 'sunday' && query.tab !== 'secret'
      ? 'predanycon'
      : query.tab;

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
              date="July 1 - 8"
            />
          </li>
          <li className={`${selectedTab === 'saturday' ? 'is-active' : ''}`}>
            <ScheduleTab id="saturday" title="Saturday" date="July 9" />
          </li>
          <li className={`${selectedTab === 'sunday' ? 'is-active' : ''}`}>
            <ScheduleTab id="sunday" title="Sunday" date="July 10" />
          </li>
          {selectedTab === 'secret' && (
            <li className={`${selectedTab === 'secret' ? 'is-active' : ''}`}>
              <ScheduleTab id="secret" title="Secret" date="???" />
            </li>
          )}
        </ul>
      </div>
      <section className="section">
        <div className="container">
          {selectedTab === 'predanycon' && (
            <>
              <ScheduleItem
                time="July 1"
                title="Lexi's birthday!"
                icon={<GiCakeSlice size="2em" />}
                iconColor="has-text-danger"
              >
                <p>Lobster? Cake? Ice cream? Whatever Lexi wants she gets!</p>
                <p>
                  Mark needs to be picked up from the airport late at night.
                </p>
              </ScheduleItem>
              <ScheduleItem
                time="July 2"
                title="Story Land"
                icon={<GiFairy size="2em" />}
                iconColor="has-text-success"
              >
                Condo board gaming possible
              </ScheduleItem>
              <ScheduleItem
                time="July 3"
                title="Santa's Village"
                icon={<GiMushroomHouse size="2em" />}
              />
              <ScheduleItem
                time="July 4"
                title="4th of July!"
                icon={<GiLaserSparks size="2em" />}
                iconColor="has-text-link"
              />
              <ScheduleItem
                time="July 5"
                title="Work"
                icon={<GiRaining size="2em" />}
              />
              <ScheduleItem
                time="July 6"
                title="Will's birthday!"
                icon={<GiCookie size="2em" />}
                iconColor="has-text-warning"
              />
              <ChooseGame
                time="Thursday, July 7 evening"
                title="Ark Nova or Forgotten Waters"
                icon={<GiElephant size="2em" />}
                games={[
                  {
                    id: 'arknova',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1635175402844',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/342942/ark-nova',
                  },
                  {
                    id: 'forgottenwaters',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1579714457850',
                      width: 112,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/302723/forgotten-waters',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="Friday, July 8 evening"
                title="Dinner at the summer house"
                icon={<GiSunglasses size="2em" />}
                iconColor="has-text-link"
              />
              <ScheduleItem
                time="Friday, July 8 night"
                title="Party games!"
                icon={<GiPartyFlags size="2em" />}
                iconColor="has-text-danger"
              />
            </>
          )}
          {selectedTab === 'saturday' && (
            <>
              <ScheduleItem
                time="Morning"
                title="Scavenger Hunt"
                icon={<GiSherlockHolmes size="2em" />}
                iconColor="has-text-warning"
              />
              <ChooseGame
                time="10:00am"
                title="Meadow or Merchant's Cove"
                icon={<GiClover size="2em" />}
                iconColor="has-text-success"
                games={[
                  {
                    id: 'meadow',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629322579564.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/314491/meadow',
                  },
                  {
                    id: 'merchantscove',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1622651478720',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/277700/merchants-cove',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="12:00pm"
                title="Lunch"
                icon={<GiMeal size="2em" />}
              />
              <ChooseGame
                time="1:30pm"
                title="Picture Perfect or Awkward Guests"
                icon={<GiPhotoCamera size="2em" />}
                games={[
                  {
                    id: 'pictureperfect',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1633968068549',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/299963/picture-perfect',
                  },
                  {
                    id: 'awkwardguests',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541660464696',
                      width: 128,
                      height: 98,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/188866/awkward-guests',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="4:00pm"
                title="Puzzled pint"
                icon={<GiBeerStein size="2em" />}
                iconColor="has-text-warning"
              />
              <ScheduleItem
                time="5:00pm"
                title="Open gaming"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
                iconColor="has-text-link"
              />
              <ScheduleItem
                time="6:30pm"
                title="Dinner and Murder"
                icon={<GiChalkOutlineMurder size="2em" />}
              />
              <ScheduleItem
                time="Late"
                title="Party games"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-danger"
              />
            </>
          )}
          {selectedTab === 'sunday' && (
            <>
              <ScheduleItem
                time="9:30am"
                title="Take Jesse to the airport"
                icon={<GiCommercialAirplane size="2em" />}
              />
              <ChooseGame
                time="10:00am"
                title="Cubitos or Calico"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-primary"
                games={[
                  {
                    id: 'cubitos',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324801304.jpg',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/298069/cubitos',
                  },
                  {
                    id: 'calico',
                    image: {
                      src: 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1592695551678',
                      width: 128,
                      height: 128,
                    },
                    bggLink:
                      'https://boardgamegeek.com/boardgame/283155/calico',
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="12:00pm"
                title="Lunch"
                icon={<GiMeal size="2em" />}
              />
              <ScheduleItem
                time="1:30pm"
                title="Pick up kids from Meemaw and Meepaw's house"
                icon={<GiFamilyHouse size="2em" />}
              />
              <ScheduleItem
                time="3:30pm"
                title="Take Mark, Erin, Finn, and Ari to the airport"
                icon={<GiCommercialAirplane size="2em" />}
              />
              <ScheduleItem
                time="Any time left"
                title="Open gaming"
                icon={<GiPerspectiveDiceSixFacesRandom size="2em" />}
                iconColor="has-text-link"
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Schedule;
