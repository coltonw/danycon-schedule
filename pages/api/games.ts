// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidUsername } from '../../lib/usernames';
import { Participants } from '../../lib/types';

type Data = {
  participants: Participants;
  gamesJoined: string[];
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

const participantsToGamesJoined = (
  participants: Participants,
  username: string
): string[] => {
  return gameChoices.filter(
    (gameId) =>
      participants[gameId] && participants[gameId].find((p) => p === username)
  );
};

const participants: Participants = {
  arknova: ['Erin', 'Mark'],
  forgottenwaters: [],
  meadow: ['Will'],
  merchantscove: [],
  pictureperfect: [],
  awkwardguests: [],
  cubitos: [],
  calico: [],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const username: string = Array.isArray(req.query.username)
    ? req.query.username[0]
    : req.query.username || '';
  if (
    req.method === 'POST' &&
    req.query.username &&
    isValidUsername(username)
  ) {
    try {
      const postJson: { action: string; game: string } = JSON.parse(req.body);
      console.log(postJson);
      if (postJson.action === 'join') {
        participants[postJson.game].push(username);
      } else if (postJson.action === 'leave') {
        participants[postJson.game] = participants[postJson.game].filter(
          (u) => u !== username
        );
      }
      const gamesJoined = participantsToGamesJoined(participants, username);
      res.status(200).json({
        participants,
        gamesJoined: gamesJoined,
      });
    } catch (e) {}
  } else {
    const gamesJoined =
      req.query.username && isValidUsername(username)
        ? participantsToGamesJoined(participants, username)
        : [];
    res.status(200).json({
      participants,
      gamesJoined: gamesJoined,
    });
  }
}
