import { getScheduleData } from '../../../lib/api';
import Hero from '../../../components/Hero';
import Schedule from '../../../components/Schedule';

interface SchedulePageProps {
  params: {
    username: string;
  };
}

async function getParticipantData(username?: string) {
  return await getScheduleData(username);
}

const SchedulePage = async ({ params }: SchedulePageProps) => {
  const { gamesJoined, participants } = await getParticipantData(
    decodeURIComponent(params.username)
  );

  return (
    <>
      <Hero title="Schedule" subtitle="Welcome to Danycon!" />
      <Schedule gamesJoined={gamesJoined} participants={participants} />
    </>
  );
};

export default SchedulePage;
