import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Participants } from '../lib/types';

interface ImageProps {
  src: string;
  width: string;
  height: string;
}

interface GameProps {
  id: string;
  image: ImageProps;
  bggLink: string;
}

interface ChooseGameProps {
  time: string;
  title: string;
  icon: ReactNode;
  iconColor?: string;
  games: GameProps[];
  gamesChosen: string[];
  participants: Participants;
}

const isGameChosen = (game: GameProps, gamesChosen: string[]): boolean => {
  return !!gamesChosen.find((id) => id === game.id);
};

const ChooseGame = ({
  time,
  title,
  icon,
  iconColor,
  games,
  gamesChosen,
  participants,
}: ChooseGameProps) => {
  const chosenGamesExist = games.find((game) =>
    isGameChosen(game, gamesChosen)
  );
  const [open, setOpen] = useState(false);
  return (
    <div className={`card mb-2 is-clickable`} onClick={() => setOpen(!open)}>
      <div className="card-content">
        <div className="content">
          <div className="is-flex is-align-items-center">
            <div className={`icon is-large ${iconColor || ''}`}>{icon}</div>
            <div>
              <div className="is-size-7">{time}</div>
              <div>{title}</div>
            </div>
            <div className="is-flex-grow-1"></div>
            <div>
              {open ? (
                <FiChevronUp />
              ) : chosenGamesExist ? (
                <FiChevronDown />
              ) : (
                <div className={`tag is-dark ${iconColor || ''}`}>
                  Choose Game!
                </div>
              )}
            </div>
          </div>
          {open && (
            <div className="mt-2 is-flex is-justify-content-center is-align-items-center">
              {games.map(({ id, image: { src, width, height }, bggLink }) => (
                <div key={id} className="mx-4 is-flex is-flex-direction-column">
                  <Link href={bggLink}>
                    <a
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <Image src={src} width={width} height={height} />
                    </a>
                  </Link>
                  <div className="is-flex is-justify-content-center">
                    <button
                      className="button is-primary is-outlined"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      Choose
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseGame;
