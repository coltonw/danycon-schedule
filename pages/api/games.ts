// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  AttributeValue,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
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

const initialParticipants: Participants = {
  arknova: [],
  forgottenwaters: [],
  meadow: [],
  merchantscove: [],
  pictureperfect: [],
  awkwardguests: [],
  cubitos: [],
  calico: [],
};

const getParticipantsItem = async (): Promise<
  Record<string, AttributeValue> | undefined
> => {
  const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.danycon_aws_access_key || '',
      secretAccessKey: process.env.danycon_aws_secret_key || '',
    },
  });
  const command = new GetItemCommand({
    TableName: 'danycon',
    Key: {
      id: { N: '0' },
    },
  });
  try {
    const data = await client.send(command);
    return data.Item;
  } catch (e) {
    console.log(e);
  }

  return undefined;
};

const getParticipants = async (
  itemParam?: Record<string, AttributeValue>
): Promise<Participants> => {
  console.log(
    `Node env: ${process.env.NODE_ENV}, AWS Code: ${process.env.danycon_aws_access_key}`
  );
  if (process.env.NODE_ENV === 'production') {
    const item = itemParam || (await getParticipantsItem());
    if (item?.participants?.S) {
      try {
        return JSON.parse(item.participants.S);
      } catch (e) {}
    }
  }
  return initialParticipants;
};

const putParticipants = async (version: string, participants: Participants) => {
  if (process.env.NODE_ENV === 'production') {
    const client = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.danycon_aws_access_key || '',
        secretAccessKey: process.env.danycon_aws_secret_key || '',
      },
    });
    const command = new PutItemCommand({
      TableName: 'danycon',
      Item: {
        id: { N: '0' },
        version: { N: '' + (parseInt(version, 10) + 1) },
        participants: { S: JSON.stringify(participants) },
      },
      ConditionExpression: `version = :v`,
      ExpressionAttributeValues: {
        ':v': { N: version },
      },
    });
    try {
      await client.send(command);
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  }
  return true;
};

export default async function handler(
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
    const participantsItem = await getParticipantsItem();
    const participants = await getParticipants(participantsItem);
    let succuss = false;
    try {
      const postJson: { action: string; game: string } = JSON.parse(req.body);
      if (postJson.action === 'join') {
        participants[postJson.game].push(username);
        succuss = await putParticipants(
          participantsItem?.version?.N || '0',
          participants
        );
      } else if (postJson.action === 'leave') {
        participants[postJson.game] = participants[postJson.game].filter(
          (u) => u !== username
        );
        succuss = await putParticipants(
          participantsItem?.version?.N || '0',
          participants
        );
      }
    } catch (e) {}

    const gamesJoined = participantsToGamesJoined(participants, username);
    res.status(succuss ? 200 : 500).json({
      participants,
      gamesJoined: gamesJoined,
    });
  } else {
    const participants = await getParticipants();
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
