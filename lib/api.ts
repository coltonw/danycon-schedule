import {
  AttributeValue,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { Participants } from './types';
import { isValidUsername } from './usernames';

const gameChoices = [
  'letsgotojapan',
  'worldwonders',
  'harmonies',
  'spectral',
  'inthefootstepsofdarwin',
  'zoovadis',
  'freelancers',
  'faiyum',
  'firstinflight',
  'caesarsempire',
  'forbiddenjungle',
];

const participantsToGamesJoined = (
  participants: Participants,
  username: string,
): string[] => {
  return gameChoices.filter(
    (gameId) =>
      participants[gameId] && participants[gameId].find((p) => p === username),
  );
};

const initialParticipants: Participants = {
  letsgotojapan: [],
  worldwonders: [],
  harmonies: [],
  spectral: [],
  inthefootstepsofdarwin: [],
  zoovadis: [],
  freelancers: [],
  faiyum: [],
  firstinflight: [],
  caesarsempire: [],
  forbiddenjungle: [],
};

const getParticipantsItem = async (): Promise<
  Record<string, AttributeValue> | undefined
> => {
  if (process.env.NODE_ENV === 'production') {
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
        id: { S: '0' },
      },
    });
    try {
      const data = await client.send(command);
      return data.Item;
    } catch (e) {
      console.log(e);
    }
  }

  return undefined;
};

const getParticipants = async (
  itemParam?: Record<string, AttributeValue>,
): Promise<Participants> => {
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
        id: { S: '0' },
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

export async function participateAction(
  username: string,
  action: 'join' | 'leave',
  game: string,
) {
  const participantsItem = await getParticipantsItem();
  const participants = await getParticipants(participantsItem);
  let succuss = false;
  let gamesJoined: string[] = [];

  if (isValidUsername(username)) {
    try {
      if (action === 'join') {
        participants[game].push(username);
        succuss = await putParticipants(
          participantsItem?.version?.N || '0',
          participants,
        );
      } else if (action === 'leave') {
        participants[game] = participants[game].filter((u) => u !== username);
        succuss = await putParticipants(
          participantsItem?.version?.N || '0',
          participants,
        );
      }
    } catch (e) {}

    gamesJoined = participantsToGamesJoined(participants, username);
  }
  return {
    succuss,
    participants,
    gamesJoined,
  };
}

export async function getScheduleData(username?: string) {
  const participants = await getParticipants();
  const gamesJoined =
    username && isValidUsername(username)
      ? participantsToGamesJoined(participants, username)
      : [];
  return {
    participants,
    gamesJoined: gamesJoined,
  };
}
