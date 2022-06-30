import { useRouter } from 'next/router';
import Image from 'next/image';
import ScheduleTab from './ScheduleTab';
import ScheduleItem from './ScheduleItem';
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
} from 'react-icons/gi';

const Schedule = () => {
  const { query } = useRouter();
  const selectedTab =
    query.tab !== 'saturday' && query.tab !== 'sunday'
      ? 'predanycon'
      : query.tab;
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
              >
                <p>Possible games:</p>
                <div className="is-flex">
                  <div className="mr-4">
                    <Image
                      src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324669399.png"
                      width="128"
                      height="128"
                    />
                  </div>
                  <div className="mx-4">
                    <Image
                      src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1580834227259"
                      width="93"
                      height="128"
                    />
                  </div>
                  <div className="ml-4">
                    <Image
                      src="https://d1lu8vbgap5ai0.cloudfront.net/602c0e01a64cb1003ce4d82e.jpg"
                      width="128"
                      height="128"
                    />
                  </div>
                </div>
              </ScheduleItem>
              <ScheduleItem
                time="Thursday, July 7 evening"
                title="Ark Nova or Forgotten Waters"
                icon={<GiElephant size="2em" />}
              >
                <div className="is-flex">
                  <div className="mr-4">
                    <Image
                      src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1635175402844"
                      width="128"
                      height="128"
                    />
                  </div>
                  <div className="ml-4">
                    <Image
                      src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1579714457850"
                      width="112"
                      height="128"
                    />
                  </div>
                </div>
              </ScheduleItem>
              <ScheduleItem
                time="Friday, July 8 evening"
                title="Meadow or Merchant's Cove"
                icon={<GiClover size="2em" />}
                iconColor="has-text-success"
              >
                <div className="is-flex">
                  <div className="mr-4">
                    <Image
                      src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629322579564.jpg"
                      width="128"
                      height="128"
                    />
                  </div>
                  <div className="ml-4">
                    <Image
                      src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1622651478720"
                      width="128"
                      height="128"
                    />
                  </div>
                </div>
              </ScheduleItem>
            </>
          )}
          {selectedTab === 'saturday' && (
            <>
              <ScheduleItem
                time="8:00am"
                title="Take kids to Meemaw and Meepaw's house"
                icon={<GiFamilyHouse size="2em" />}
              />
              <ScheduleItem
                time="Morning"
                title="Open gaming"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-primary"
              />
              <ScheduleItem
                time="12:00pm"
                title="Lunch"
                icon={<GiMeal size="2em" />}
              />
              <ScheduleItem
                time="1:30pm"
                title="Picture Perfect or Awkward Guests"
                icon={<GiPhotoCamera size="2em" />}
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
                title="Take Jesse and Mezbeth to the airport"
                icon={<GiCommercialAirplane size="2em" />}
              />
              <ScheduleItem
                time="10am"
                title="Cubitos or Calico"
                icon={<GiCardJoker size="2em" />}
                iconColor="has-text-primary"
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
