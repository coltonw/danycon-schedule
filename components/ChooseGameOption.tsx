import Link from 'next/link';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { GameProps, Participants, ScheduleData } from '../lib/types';
import { isGameJoined, useUsername } from '../lib/utils';

interface ChooseGameOptionProps {
  game: GameProps;
  gamesJoined: string[];
  participants: Participants;
  joinedGamesExist?: boolean;
  updateData: (params: ScheduleData) => void;
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
  updateData,
}: ChooseGameOptionProps) => {
  const username = useUsername();
  const joined = isGameJoined({ id }, gamesJoined);
  return (
    <div key={id} className="column">
      <div className="media">
        <div className="media-left">
          <Link href={bggLink}>
            <Image
              src={src}
              width={width}
              height={height}
              alt={id}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Link>
        </div>
        <div className="media-content">
          <article className="panel">
            {(participants[id] || []).map((u) => (
              <span key={u} className="panel-block">
                <span className="panel-icon">
                  <FiUser />
                </span>
                {u}
              </span>
            ))}
            <div className="panel-block">
              <button
                className={`button is-link is-fullwidth ${joinedGamesExist && !joined ? '' : 'is-outlined'}`}
                onClick={async () => {
                  if (joined) {
                    const resp = await fetch(`/api/games`, {
                      method: 'POST',
                      body: JSON.stringify({
                        username,
                        action: 'leave',
                        game: id,
                      }),
                    });
                    if (resp.status === 200) {
                      const data = await resp.json();
                      updateData(data);
                    }
                  } else if (!joinedGamesExist) {
                    const resp = await fetch(`/api/games`, {
                      method: 'POST',
                      body: JSON.stringify({
                        username,
                        action: 'join',
                        game: id,
                      }),
                    });
                    if (resp.status === 200) {
                      const data = await resp.json();
                      updateData(data);
                    }
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
