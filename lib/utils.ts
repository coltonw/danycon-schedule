import { useCookies } from 'react-cookie';
import { isValidUsername } from './usernames';

interface IDed {
  id: string;
}

export const isGameJoined = (game: IDed, gamesJoined: string[]): boolean => {
  return !!gamesJoined.find((id) => id === game.id);
};

// this cannot be in 'usernames' where it might make more sense because
// that file is imported by the server and the server doesn't support react-cookie
export const useUsername = (): string => {
  const [cookies] = useCookies(['username']);
  if (isValidUsername(cookies.username)) {
    return cookies.username;
  }
  return 'Mary Elizabeth';
};
