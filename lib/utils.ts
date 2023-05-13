import { usePathname } from 'next/navigation';
import { validateUsername } from './usernames';

interface IDed {
  id: string;
}

export const isGameJoined = (game: IDed, gamesJoined: string[]): boolean => {
  return !!gamesJoined.find((id) => id === game.id);
};

// this cannot be in 'usernames' where it might make more sense because
// that file is imported by the server and the server doesn't support
// localstorage or usePathname
export const useUsername = (): string => {
  const pathname = usePathname();
  const usernamePath = validateUsername(
    pathname.slice(pathname.lastIndexOf('/') + 1)
  );
  const usernameLS = validateUsername(
    localStorage.getItem('username') || undefined
  );
  return usernamePath || usernameLS || 'Mary Elizabeth';
};
