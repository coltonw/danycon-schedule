export type Participants = { [id: string]: string[] };

export interface ImageProps {
  src: string;
  width: number;
  height: number;
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
