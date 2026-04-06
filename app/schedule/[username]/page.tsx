import Hero from "../../../components/Hero";
import Schedule from "../../../components/Schedule";
import { getScheduleData } from "../../../lib/api";

interface SchedulePageProps {
  params: Promise<{
    username: string;
  }>;
}

async function getParticipantData(username?: string) {
  return await getScheduleData(username);
}

const SchedulePage = async ({ params }: SchedulePageProps) => {
  const { username } = await params;
  const { gamesJoined, participants } = await getParticipantData(
    decodeURIComponent(username),
  );

  return (
    <>
      <Hero title="Schedule" subtitle="Welcome to Danycon!" />
      <Schedule gamesJoined={gamesJoined} participants={participants} />
    </>
  );
};

export default SchedulePage;
