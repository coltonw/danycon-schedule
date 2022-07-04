import { IncomingMessage } from 'http';
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Schedule from '../components/Schedule';
import { Participants } from '../lib/types';

interface HomeProps {
  gamesChosen: string[];
  participants: Participants;
}

const Home: NextPage<HomeProps> = ({ gamesChosen, participants }) => {
  return (
    <>
      <Hero
        title="Schedule"
        subtitle="Board gaming will commence in 3 2 1 ... Lift Off"
      />
      <Schedule gamesChosen={gamesChosen} participants={participants} />
    </>
  );
};

export default Home;

export async function getServerSideProps({ req }: { req: IncomingMessage }) {
  try {
    // We may later want to make this a call directly to DynamoDB
    const usernameCookie = /(?:^|; ?)username=([^;]*)/.exec(
      req.headers.cookie || ''
    );
    const username =
      usernameCookie && usernameCookie.length > 1 ? usernameCookie[1] : '';
    const apiResponse = await fetch(
      `http://${req.headers.host}/api/games?username=${username}`
    );
    if (apiResponse.status === 200) {
      const { gamesChosen, participants } = await apiResponse.json();
      return {
        props: {
          gamesChosen: gamesChosen || [],
          participants: participants || {},
        },
      };
    }
  } catch (e) {}
  return {
    props: { gamesChosen: [], participants: {} },
  };
}
