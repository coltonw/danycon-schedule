import { ReactNode, useState } from 'react';
import { useCookies } from 'react-cookie';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { GameProps, Participants } from '../lib/types';
import { isValidUsername } from '../lib/usernames';
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
}

const ChooseGame = ({
  time,
  title,
  icon,
  iconColor,
  games,
  gamesJoined: initialGamesJoined,
  participants: initialParticipants,
}: ChooseGameProps) => {
  const [cookies] = useCookies(['username']);
  const [open, setOpen] = useState(false);
  const [participants, setParticipants] = useState(initialParticipants);
  const [gamesJoined, setGamesJoined] = useState(initialGamesJoined);

  const joinedGamesExist = !!games.find((game) =>
    isGameJoined(game, gamesJoined)
  );

  const joinGame = (id: string) => {
    if (isValidUsername(cookies.username)) {
      setGamesJoined([...gamesJoined, id]);
      setParticipants({
        ...participants,
        [id]: [...participants[id], cookies.username],
      });
    }
  };
  const leaveGame = (id: string) => {
    if (isValidUsername(cookies.username)) {
      setGamesJoined(gamesJoined.filter((g) => g !== id));
      setParticipants({
        ...participants,
        [id]: participants[id].filter((u) => u !== cookies.username),
      });
    }
  };

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
                <div className={`tag is-dark ${iconColor || ''}`}>
                  Choose Game!
                </div>
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
                  joinGame={joinGame}
                  leaveGame={leaveGame}
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
