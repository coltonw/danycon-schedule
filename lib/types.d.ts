export type Participants = { [id: string]: string[] };

export interface ImageProps {
  src: string;
  width: string;
  height: string;
}

export interface GameProps {
  id: string;
  image: ImageProps;
  bggLink: string;
}

export interface ScheduleData {
  gamesJoined: string[];
  participants: Participants;
}
