"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  GiBalloons,
  GiBriefcase,
  GiChalkOutlineMurder,
  GiCoffeeCup,
  GiCommercialAirplane,
  GiDiceTwentyFacesTwenty,
  GiFamilyHouse,
  GiForkKnifeSpoon,
  GiGhost,
  GiGreekTemple,
  GiHamburger,
  GiMeeple,
  GiMeepleGroup,
  GiUfo,
  GiPartyFlags,
  GiPawn,
  GiPuzzle,
  GiRollingDiceCup,
  GiRollingDices,
  GiHotMeal,
  GiTacos,
  GiStrawberry,
  GiViolin,
} from "react-icons/gi";
import type { ScheduleData } from "../lib/types";
import ChooseGame from "./ChooseGame";
import ScheduleItem from "./ScheduleItem";
import ScheduleTab from "./ScheduleTab";

const Schedule = ({
  gamesJoined: initialGamesJoined,
  participants: initialParticipants,
}: ScheduleData) => {
  const searchParams = useSearchParams();
  const [participants, setParticipants] = useState(initialParticipants);
  const [gamesJoined, setGamesJoined] = useState(initialGamesJoined);
  let defaultTab = "friday";
  const time = Date.now();
  // We use 3am EDT (7am UTC) to mark the start of the next danycon day
  if (time > new Date("2026-04-13T07:00:00.000Z").getTime()) {
    defaultTab = "monday";
  } else if (time > new Date("2026-04-12T07:00:00.000Z").getTime()) {
    defaultTab = "sunday";
  } else if (time > new Date("2026-04-11T07:00:00.000Z").getTime()) {
    defaultTab = "saturday";
  }
  const selectedTab =
    searchParams?.get("tab") !== "friday" &&
    searchParams?.get("tab") !== "saturday" &&
    searchParams?.get("tab") !== "sunday" &&
    searchParams?.get("tab") !== "monday"
      ? defaultTab
      : searchParams?.get("tab");

  const updateData = ({ gamesJoined: gJ, participants: p }: ScheduleData) => {
    setParticipants(p);
    setGamesJoined(gJ);
  };
  return (
    <>
      <div className="tabs is-centered mb-0">
        <ul>
          <li className={`${selectedTab === "friday" ? "is-active" : ""}`}>
            <ScheduleTab id="friday" title="Friday" date="April 10" />
          </li>
          <li className={`${selectedTab === "saturday" ? "is-active" : ""}`}>
            <ScheduleTab id="saturday" title="Saturday" date="April 11" />
          </li>
          <li className={`${selectedTab === "sunday" ? "is-active" : ""}`}>
            <ScheduleTab id="sunday" title="Sunday" date="April 12" />
          </li>
          <li className={`${selectedTab === "monday" ? "is-active" : ""}`}>
            <ScheduleTab id="monday" title="Monday" date="April 13" />
          </li>
        </ul>
      </div>
      <section className="section">
        <div className="container">
          {selectedTab === "friday" && (
            <>
              <ScheduleItem
                time="3:10pm"
                title="Jesse and Mary Elizabeth arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-success"
              >
                <Link href="https://www.flightaware.com/live/flight/SWA541/history/20260410/1640Z/KBNA/KBOS">
                  Southwest 541
                </Link>{" "}
                (Nashville → Boston)
              </ScheduleItem>
              <ScheduleItem
                time="3:40pm"
                title="Mandy and Bailey arrive"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-warning"
              >
                <Link href="https://www.flightaware.com/live/flight/UAL1232">
                  United 1232
                </Link>{" "}
                (Denver → Boston)
              </ScheduleItem>
              <ScheduleItem
                time="TBD"
                title="Mark arrives"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-link"
              >
                Time TBD
              </ScheduleItem>
              <ScheduleItem
                time="Evening"
                title="Sporcle Quiz and Open gaming"
                icon={<GiRollingDices size="2em" />}
                iconColor="has-text-warning"
              >
                Do Friday's{" "}
                <Link href="https://www.sporcle.com/games/DejaV/paranormal-games-by-tagline">
                  daily Sporcle quiz
                </Link>
                , then break out the{" "}
                <Link href="/paranormal">paranormal themed games</Link> while
                everyone settles in!
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
          {selectedTab === "saturday" && (
            <>
              <ScheduleItem
                time="9:00am – 11:00am"
                title="Julius's Pancake Breakfast"
                icon={<GiCoffeeCup size="2em" />}
              >
                Everyone heads to First Church of Lancaster for pancakes
              </ScheduleItem>
              <ScheduleItem
                time="After breakfast"
                title="Sporcle Quiz and Open gaming"
                icon={<GiMeepleGroup size="2em" />}
                iconColor="has-text-gray"
              >
                <Link href="https://www.sporcle.com/games/DejaV/danycon-through-the-ages">
                  Saturday's daily Sporcle quiz!
                </Link>
                <br />
                <Link href="/paranormal">
                  Paranormal themed game suggestions
                </Link>
              </ScheduleItem>
              <ChooseGame
                time="11:30am (30 min)"
                title="Trinket Trove or Combo"
                icon={<GiStrawberry size="2em" />}
                iconColor="has-text-danger"
                games={[
                  {
                    id: "trinkettrove",
                    image: {
                      src: "https://cf.geekdo-images.com/OaULQMLUHwDrDszJsHK8pA__itemrep/img/fDLcmrXDILphaYqEOu1SNxEDuVE=/fit-in/246x300/filters:strip_icc()/pic8985794.jpg",
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      "https://boardgamegeek.com/boardgame/436931/trinket-trove",
                  },
                  {
                    id: "combo",
                    image: {
                      src: "https://cf.geekdo-images.com/NV8dnINCwJaD5ZrKzqePDA__imagepage/img/uWgseSuF5R5DuNeTHNmja06Sw3U=/fit-in/600x400/filters:strip_icc()/pic8061227.png",
                      width: 192,
                      height: 128,
                    },
                    bggLink:
                      "https://boardgamegeek.com/boardgame/394887/surfosaurus-max",
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="12:30pm"
                title="Lunch"
                icon={<GiHamburger size="2em" />}
                iconColor="has-text-warning"
              />
              <ChooseGame
                time="2:00pm (60 min)"
                title="Guildlands or Orbit"
                icon={<GiUfo size="2em" />}
                iconColor="has-text-success"
                games={[
                  {
                    id: "guildlands",
                    image: {
                      src: "https://cf.geekdo-images.com/CSJCc5ujq4PktChkmLIcPg__itemrep/img/LmIFUCFKiBz32unaKz1ui1F3kQ4=/fit-in/246x300/filters:strip_icc()/pic8955025.jpg",
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      "https://boardgamegeek.com/boardgame/447587/guildlands",
                  },
                  {
                    id: "orbit",
                    image: {
                      src: "https://cf.geekdo-images.com/0x7TCH7bCynSQqW3GVc8UA__itemrep/img/3FehhBN80nEO3VL5bm6gYqRPTPY=/fit-in/246x300/filters:strip_icc()/pic8478397.png",
                      width: 100,
                      height: 128,
                    },
                    bggLink: "https://boardgamegeek.com/boardgame/429767/orbit",
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="3:30pm"
                title="Open gaming"
                icon={<GiPawn size="2em" />}
                iconColor="has-text-link"
              >
                <Link href="/paranormal">
                  Paranormal themed game suggestions
                </Link>
              </ScheduleItem>
              <ScheduleItem
                time="6:30pm"
                title="Dinner"
                icon={<GiHotMeal size="2em" />}
              />
              <ScheduleItem
                time="Evening? Night?"
                title="Erin arrives"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-danger"
              >
                Time TBD
              </ScheduleItem>
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
              />
            </>
          )}
          {selectedTab === "sunday" && (
            <>
              <ScheduleItem
                time="Early morning"
                title="Sporcle quiz and Open Gaming"
                icon={<GiDiceTwentyFacesTwenty size="2em" />}
                iconColor="has-text-gray"
              >
                <Link href="https://www.sporcle.com/games/DejaV/board-games-missing-pieces">
                  Sunday's daily Sporcle quiz!
                </Link>
                <br />
                <Link href="/paranormal">
                  Paranormal themed game suggestions
                </Link>
              </ScheduleItem>
              <ChooseGame
                time="10:00am (90 min)"
                title="Etherfields or Cyclades"
                icon={<GiGreekTemple size="2em" />}
                iconColor="has-text-info"
                games={[
                  {
                    id: "etherfields",
                    image: {
                      src: "https://cf.geekdo-images.com/K1yVmbbWCsQuiWk-7x-V-Q__itemrep/img/sn5fNJYWUBD1DJ9pDpqxjkF6kcI=/fit-in/246x300/filters:strip_icc()/pic7455627.png",
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      "https://boardgamegeek.com/boardgame/280794/etherfields",
                  },
                  {
                    id: "cyclades",
                    image: {
                      src: "https://cf.geekdo-images.com/6QbaJOS8acWkJ6gSYI0KaQ__itemrep/img/Yd9YB69mzV4X4e3zD6oX2H_ohik=/fit-in/246x300/filters:strip_icc()/pic584779.jpg",
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      "https://boardgamegeek.com/boardgame/54998/cyclades",
                  },
                ]}
                gamesJoined={gamesJoined}
                participants={participants}
                updateData={updateData}
              />
              <ScheduleItem
                time="12:30pm"
                title="Lunch"
                icon={<GiTacos size="2em" />}
                iconColor="has-text-warning"
              />
              <ChooseGame
                time="2:00pm (120 min)"
                title="Luthier or Puerto Rico Special Edition"
                icon={<GiViolin size="2em" />}
                iconColor="has-text-brown"
                games={[
                  {
                    id: "luthier",
                    image: {
                      src: "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__itemrep/img/rFyVKpt-JhbahxmqTXGBa8heovg=/fit-in/246x300/filters:strip_icc()/pic8145392.png",
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      "https://boardgamegeek.com/boardgame/371330/luthier",
                  },
                  {
                    id: "puertorico",
                    image: {
                      src: "https://cf.geekdo-images.com/ewNPD8vcrsXVfuVc9_E6hg__itemrep/img/tGk7IUtPVvPuoHu1xHd16SgKxsg=/fit-in/246x300/filters:strip_icc()/pic8376834.jpg",
                      width: 100,
                      height: 128,
                    },
                    bggLink:
                      "https://boardgamegeek.com/boardgame/415843/puerto-rico-1897-special-edition",
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
                Indie RPG — split into two groups. People leave Monday so we can
                go as late as we want!
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
          {selectedTab === "monday" && (
            <>
              <ScheduleItem
                time="Morning"
                title="Sporcle quiz and open gaming"
                icon={<GiPuzzle size="2em" />}
                iconColor="has-text-info"
              >
                <Link href="https://www.sporcle.com/games/DejaV/board-game-by-first-player-rules">
                  Monday's daily Sporcle quiz!
                </Link>
                <br />
                <Link href="/paranormal">
                  Paranormal themed game suggestions
                </Link>
              </ScheduleItem>
              <ScheduleItem
                time="12:00pm"
                title="Lunch"
                icon={<GiForkKnifeSpoon size="2em" />}
              />
              <ScheduleItem
                time="After lunch"
                title="Open gaming"
                icon={<GiRollingDiceCup size="2em" />}
                iconColor="has-text-warning"
              >
                <Link href="/paranormal">
                  Paranormal themed game suggestions
                </Link>
              </ScheduleItem>
              <ScheduleItem
                time="After lunch"
                title="Pack up and goodbyes"
                icon={<GiBriefcase size="2em" />}
                iconColor="has-text-brown"
              />
              <ScheduleItem
                time="3:50pm"
                title="Jesse and Mary Elizabeth leave"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-success"
              >
                <Link href="https://www.flightaware.com/live/flight/SWA872">
                  Southwest 872
                </Link>{" "}
                (Boston → Nashville)
              </ScheduleItem>
              <ScheduleItem
                time="5:05pm"
                title="Mandy and Bailey leave"
                icon={<GiCommercialAirplane size="2em" />}
                iconColor="has-text-warning"
              >
                <Link href="https://www.flightaware.com/live/flight/SWA892">
                  Southwest 892
                </Link>{" "}
                (Boston → Denver)
              </ScheduleItem>
              <ScheduleItem
                time="TBD"
                title="Mark and Erin leave"
                icon={<GiCommercialAirplane size="2em" />}
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
