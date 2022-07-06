import Link from 'next/link';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { GameProps, Participants } from '../lib/types';
import { isGameJoined, useUsername } from '../lib/utils';

interface ChooseGameOptionProps {
  game: GameProps;
  gamesJoined: string[];
  participants: Participants;
  joinedGamesExist?: boolean;
  joinGame: (id: string) => void;
  leaveGame: (id: string) => void;
}

const ChooseGameOption = ({
  game: {
    id,
    image: { src, width, height },
    bggLink,
  },
  gamesJoined,
  participants,
  joinedGamesExist,
  joinGame,
  leaveGame,
}: ChooseGameOptionProps) => {
  const username = useUsername();
  const joined = isGameJoined({ id }, gamesJoined);
  return (
    <div key={id} className="column">
      <div className="media">
        <div className="media-left">
          <Link href={bggLink}>
            <a>
              <Image src={src} width={width} height={height} alt={id} />
            </a>
          </Link>
        </div>
        <div className="media-content">
          <article className="panel">
            {participants[id].map((u) => (
              <span key={u} className="panel-block">
                <span className="panel-icon">
                  <FiUser />
                </span>
                {u}
              </span>
            ))}
            <div className="panel-block">
              <button
                className="button is-link is-outlined is-fullwidth"
                onClick={() => {
                  if (joined) {
                    fetch(`/api/games?username=${username}`, {
                      method: 'POST',
                      body: JSON.stringify({
                        action: 'leave',
                        game: id,
                      }),
                    });
                    leaveGame(id);
                  } else if (!joinedGamesExist) {
                    fetch(`/api/games?username=${username}`, {
                      method: 'POST',
                      body: JSON.stringify({
                        action: 'join',
                        game: id,
                      }),
                    });
                    joinGame(id);
                  }
                }}
                disabled={joinedGamesExist && !joined}
              >
                {joined ? 'Leave' : 'Join'}
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ChooseGameOption;
