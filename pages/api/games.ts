// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidUsername } from '../../lib/usernames';
import { Participants } from '../../lib/types';

type Data = {
  participants: Participants;
  gamesChosen: string[];
};

const gameChoices = [
  'arknova',
  'forgottenwaters',
  'meadow',
  'merchantscove',
  'pictureperfect',
  'awkwardguests',
  'cubitos',
  'calico',
];

const participantsToGamesChosen = (
  participants: Participants,
  username: string
): string[] => {
  return gameChoices.filter(
    (gameId) =>
      participants[gameId] && participants[gameId].find((p) => p === username)
  );
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const participants = {
    arknova: ['Erin', 'Mark'],
    forgottenwaters: [],
    meadow: ['Will'],
    merchantscove: [],
    pictureperfect: [],
    awkwardguests: [],
    cubitos: [],
    calico: [],
  };
  console.log(req.query);
  const username: string = Array.isArray(req.query.username)
    ? req.query.username[0]
    : req.query.username || '';
  console.log(`query: ${username}, valid? ${isValidUsername(username)}`);
  const gamesChosen =
    req.query.username && isValidUsername(username)
      ? participantsToGamesChosen(participants, username)
      : [];
  res.status(200).json({
    participants,
    gamesChosen: gamesChosen,
  });
}
