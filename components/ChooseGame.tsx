import { ReactNode, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { GameProps, Participants, ScheduleData } from '../lib/types';
import { isGameJoined } from '../lib/utils';
import ChooseGameOption from './ChooseGameOption';

interface ChooseGameProps {
  time: string;
  title: string;
  icon: ReactNode;
  iconColor?: string;
  games: GameProps[];
  gamesJoined: string[];
  participants: Participants;
  updateData: (params: ScheduleData) => void;
}

const ChooseGame = ({
  time,
  title,
  icon,
  iconColor,
  games,
  gamesJoined,
  participants,
  updateData,
}: ChooseGameProps) => {
  const [open, setOpen] = useState(false);

  const joinedGamesExist = !!games.find((game) =>
    isGameJoined(game, gamesJoined)
  );

  return (
    <div className={`card mb-2`}>
      <div className="card-content">
        <div className="content">
          <div
            className="is-flex is-align-items-center is-clickable"
            onClick={() => setOpen(!open)}
          >
            <div className={`icon is-large ${iconColor || ''}`}>{icon}</div>
            <div>
              <div className="is-size-7">{time}</div>
              <div>{title}</div>
            </div>
            <div className="is-flex-grow-1"></div>
            <div>
              {open ? (
                <FiChevronUp />
              ) : joinedGamesExist ? (
                <FiChevronDown />
              ) : (
                <div className="tag is-dark">Choose Game!</div>
              )}
            </div>
          </div>
          {open && (
            <div className="mt-2 columns">
              {games.map((game) => (
                <ChooseGameOption
                  key={game.id}
                  game={game}
                  gamesJoined={gamesJoined}
                  participants={participants}
                  joinedGamesExist={joinedGamesExist}
                  updateData={updateData}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseGame;
