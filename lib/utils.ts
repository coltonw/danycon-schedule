import { GameProps } from './types';

interface IDed {
  id: string;
}

export const isGameJoined = (game: IDed, gamesJoined: string[]): boolean => {
  return !!gamesJoined.find((id) => id === game.id);
};
